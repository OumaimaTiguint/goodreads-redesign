import {BooksService} from './../../services/books.service';
import {Component, OnInit} from '@angular/core';
import Book, {Shelf} from '../../models/book';
import {BookInfoModalComponent} from '../book-info-modal/book-info-modal.component';
import {MatDialog} from '@angular/material/dialog';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
	selector: 'app-currently-reading',
	standalone: true,
	imports: [
		CommonModule,
		MatButtonModule
	],
	templateUrl: './currently-reading.component.html',
	styleUrls: ['./currently-reading.component.scss']
})
export class CurrentlyReadingComponent implements OnInit {
	currentlyReadingBooks: Book[] = [];

	constructor(private booksService: BooksService,
				public dialog: MatDialog) { }

	ngOnInit(): void {
		this.booksService.gettAllBooks().subscribe(data => {
			this.currentlyReadingBooks = data.filter((el:Book) => el.shelf == Shelf.currentlyReading);
		});
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
