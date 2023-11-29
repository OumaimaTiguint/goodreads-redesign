import {CommonModule} from '@angular/common';
import {Component, OnInit, signal} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {BooksService} from '../../services/books.service';
import Book from '../../models/book';
import {BookInfoModalComponent} from '../book-info-modal/book-info-modal.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
	selector: 'app-search',
	standalone: true,
	imports: [
		CommonModule,
		MatIconModule,
		MatFormFieldModule,
		FormsModule,
		MatInputModule,
		MatAutocompleteModule,
		ReactiveFormsModule
	],
	template: `
		<mat-form-field appearance="outline" class="mt-4">
    		<input matInput 
				   type="text" 
				   [formControl]="searchControl" 
				   placeholder="Search" 
				   class="ps-2" 
				   (input)="onSearchInput()"
				   [matAutocomplete]="auto"/>
				<mat-icon matPrefix>search</mat-icon>
    			@if(searchControl.value) {
    				<button matSuffix mat-icon-button aria-label="Clear" (click)="clearSearch()">
        				<mat-icon>close</mat-icon>
      				</button>
    			}
    		
		</mat-form-field>

		<mat-autocomplete #auto="matAutocomplete">
			@for(item of filteredItems(); track item._id) {
				<mat-option [value]="item._id" (onSelectionChange)="onAutocompleteSelectionChange(item)">
					<div class="d-flex flex-row justify-content-between w-100 my-2">
						<img src={{item.cover}} 
							 alt={{item.title}} 
							 width="50" 
							 height="80"/>
						<div class="text-nowrap overflow-hidden text-truncate ms-1" style="max-width: 150px">
							{{item.title}}
						</div>
					</div>
      			</mat-option>
			}
    	</mat-autocomplete>
	`
})
export class SearchComponent implements OnInit {
  	searchControl = new FormControl();
  	items!: Book[];
  	filteredItems = signal<Book[] | undefined>([])

  	constructor(private booksService: BooksService, 
				public dialog: MatDialog) {}

  	ngOnInit(): void {
		this.booksService.gettAllBooks().subscribe(res => {
			this.items = res;
			this.filteredItems.set(this.items);
		})
  	}

  	onSearchInput() {
    	const searchValue = this.searchControl.value.toLowerCase();
    	this.filteredItems.set(this.items.filter(item => item.title.toLowerCase().includes(searchValue)));
  	}

  	clearSearch() {
    	this.searchControl.setValue('');
    	this.filteredItems.set(this.items);
  	}

	onAutocompleteSelectionChange(selectedItem: Book) {
		if (selectedItem) {
		  this.openInfoDialog(selectedItem);
		  this.clearSearch();
		}
	}
	  
	openInfoDialog(book:Book) {
		this.dialog.open(BookInfoModalComponent, {
			data: {
				book: book,
			},
			height: '98%',
            width: '100%'
		});
	}
}
