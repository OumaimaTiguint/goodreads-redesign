import {BooksService} from './../../services/books.service';
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import Book, {Shelf} from '../../models/book';
import {CommonModule} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {StarRatingModule} from 'angular-star-rating';
import User from '../../models/user';
import {UserService} from '../../services/user.service';
import {map, switchMap} from 'rxjs';

@Component({
	selector: 'app-book-info-modal',
	standalone: true,
	imports: [
		CommonModule,
		MatDialogModule,
		MatSelectModule,
		StarRatingModule
	],
	templateUrl: './book-info-modal.component.html',
	styleUrl: './book-info-modal.component.scss'
})
export class BookInfoModalComponent implements OnInit {
	shelves: any[] = [
		{value: Shelf.toRead, name: 'Want to Read'},
		{value: Shelf.dnf, name: 'Did not finish'},
		{value: Shelf.currentlyReading, name: 'Currently Reading'},
		{value: Shelf.read, name: 'Read'}
	];
	Shelf = Shelf;
	user: User | undefined;

	constructor(@Inject(MAT_DIALOG_DATA) public data: any,
				private booksService: BooksService,
				private userService: UserService) {}

	ngOnInit(): void {
		this.userService.getUser().pipe(
			switchMap(user => {
				return this.booksService.getAllBooks().pipe(
					map(allBooks => {
						this.user = user;
						console.log(this.user)
				  		const book = allBooks.find((book: Book) => book.title === this.data.book.title);
						if (book) {
							this.data.book = book;
						}
					})
				);
			})
		).subscribe({
			error: error => {
				console.error('Error fetching data:', error);
			}
		});
	}

	changeShelf(shelf: Shelf) {
		const index = this.user?.books?.findIndex(item => item._id === this.data.book._id);
		if(index !== -1) {
			this.data.book.shelf = shelf;
			this.userService.updateUser(this.user?._id, 'update', this.data.book._id, this.data.book)
				.subscribe(() => window.location.reload());
		} else {
			const newBook = {
				shelf: shelf,
				author: this.data.book.author,
				cover: this.data.book.cover,
				description: this.data.book.description,
				title: this.data.book.title
			};
		  
			this.userService.updateUser(this.user?._id, 'add', this.data.book._id, newBook)
				.subscribe(() => window.location.reload());
		}
	}

	onRatingChange(event: any) {
		const index = this.user?.books?.findIndex(item => item._id === this.data.book._id);
		this.data.book.rating = event.rating;
		this.booksService.updateBook(this.data.book._id, this.data.book)
			.subscribe(() => window.location.reload());

		this.userService.updateUser(this.user?._id, 'update', this.data.book._id, this.data.book)
			.subscribe(() => window.location.reload());
	}

}
