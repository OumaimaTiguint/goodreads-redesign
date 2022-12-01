import {BooksService} from './../../services/books.service';
import {BookInfoModalComponent} from './book-info-modal.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {StarRatingModule} from 'angular-star-rating';

@NgModule({
	declarations: [
		BookInfoModalComponent
	],
	imports: [
		CommonModule,
		MatDialogModule,
		MatSelectModule,
		StarRatingModule
	],
	exports :[
		BookInfoModalComponent
	],
	providers: [
		BooksService
	]
})
export class BookInfoModalModule { }
