import {Component, OnInit} from '@angular/core';
import Book, {Shelf} from '../../models/book';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {BookInfoModalComponent} from '../book-info-modal/book-info-modal.component';
import {CommonModule} from '@angular/common';
import {UserService} from '../../services/user.service';
import User from '../../models/user';

@Component({
	selector: 'app-reading-challenge',
	standalone: true,
	imports: [
		CommonModule,
		MatDialogModule
	],
	templateUrl: './reading-challenge.component.html',
	styleUrl: './reading-challenge.component.scss'
})
export class ReadingChallengeComponent implements OnInit {
	readBooks: Book[] = [];

	constructor(private userService: UserService,
				public dialog: MatDialog) { }

	ngOnInit(): void {
		this.userService.getUser().subscribe((data: any) => {
			this.readBooks = data?.books.filter((book: Book) => book.shelf == Shelf.read);
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
