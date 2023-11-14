import {BooksService} from './../../services/books.service';
import {BookInfoModalComponent} from './book-info-modal.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatLegacyDialogModule as MatDialogModule} from '@angular/material/legacy-dialog';
import {MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select';
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
