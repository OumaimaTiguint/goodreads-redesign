import {BookInfoModalComponent} from './../book-info-modal/book-info-modal.component';
import {BooksService} from './../../services/books.service';
import {Component, OnInit} from '@angular/core';
import Book, {Shelf} from '../../models/book';
import {MatDialog} from '@angular/material/dialog';
import {CommonModule} from '@angular/common';

@Component({
	selector: 'app-want-to-read',
	standalone: true,
	imports: [
		CommonModule,
		BookInfoModalComponent
	],
	templateUrl: './want-to-read.component.html',
	styleUrl: './want-to-read.component.scss'
})
export class WantToReadComponent implements OnInit {
	tbr: Book[] = [];
	
	constructor(private booksService: BooksService,
				public dialog: MatDialog) { }

	ngOnInit(): void {
		this.booksService.getAllBooks().subscribe((el:Book[]) => {
			this.tbr = el.filter((book: Book) => book.shelf == Shelf.toRead);
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
