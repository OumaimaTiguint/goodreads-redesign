import {BooksService} from './../../services/books.service';
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import Book, {Shelf} from '../../models/book';

@Component({
	selector: 'app-book-info-modal',
	templateUrl: './book-info-modal.component.html',
	styleUrls: ['./book-info-modal.component.scss']
})
export class BookInfoModalComponent implements OnInit {
	shelves: any[] = [
		{value: Shelf.toRead, name: 'Want to Read'},
		{value: Shelf.dnf, name: 'Did not finish'},
		{value: Shelf.currentlyReading, name: 'Currently Reading'},
		{value: Shelf.read, name: 'Read'}
	];
	Shelf = Shelf;

	constructor(@Inject(MAT_DIALOG_DATA) public data: any,
				private booksService: BooksService) {}

	ngOnInit(): void {
		this.booksService.gettAllBooks().subscribe((allBooks: Book[]) => {
			if (allBooks.find(book => book.title == this.data.book.title)) {
				this.data.book = allBooks.find(book => book.title == this.data.book.title);
			}
		});
	}

	changeShelf(shelf: Shelf) {
		if (!!this.data.book._id) {
			this.data.book.shelf = shelf;
			this.booksService.updateBook(this.data.book._id, this.data.book)
				.subscribe(() => window.location.reload());
		} else {
			this.data.book.shelf = shelf;
			this.booksService.addBook({
				shelf: shelf,
				author: this.data.book.author,
				cover: this.data.book.cover,
				description: this.data.book.description,
				title: this.data.book.title
			}).subscribe(() => window.location.reload());
		}
		
	}

	onRatingChange(event: any) {
		this.data.book.rating = event.rating;
		this.booksService.updateBook(this.data.book._id, this.data.book)
			.subscribe(() => window.location.reload());
	}

}
