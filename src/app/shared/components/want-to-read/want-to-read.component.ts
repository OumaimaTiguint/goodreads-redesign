import {BookInfoModalComponent} from './../book-info-modal/book-info-modal.component';
import {Component, OnInit} from '@angular/core';
import Book, {Shelf} from '../../models/book';
import {MatDialog} from '@angular/material/dialog';
import {CommonModule} from '@angular/common';
import {UserService} from '../../services/user.service';

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
	
	constructor(private userService: UserService,
				public dialog: MatDialog) { }

	ngOnInit(): void {
		this.userService.getUser().subscribe((data:any) => {
			this.tbr = data?.books.filter((book: Book) => book.shelf == Shelf.toRead);
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
