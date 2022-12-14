import {BooksService} from './../../services/books.service';
import {Component, OnInit} from '@angular/core';
import Book, {Shelf} from '../../models/book';
import {MatDialog} from '@angular/material/dialog';
import {BookInfoModalComponent} from '../book-info-modal/book-info-modal.component';

@Component({
	selector: 'app-reading-challenge',
	templateUrl: './reading-challenge.component.html',
	styleUrls: ['./reading-challenge.component.scss']
})
export class ReadingChallengeComponent implements OnInit {
	readBooks: Book[] = [];

	constructor(private booksService: BooksService,
				public dialog: MatDialog) { }

	ngOnInit(): void {
		this.booksService.gettAllBooks().subscribe((books:Book[]) => {
			this.readBooks = books.filter(book => book.shelf == Shelf.read);
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
