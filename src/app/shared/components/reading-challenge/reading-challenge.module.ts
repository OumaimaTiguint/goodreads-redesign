import {MatLegacyDialogModule as MatDialogModule} from '@angular/material/legacy-dialog';
import {BooksService} from './../../services/books.service';
import {ReadingChallengeComponent} from './reading-challenge.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

@NgModule({
	declarations: [
		ReadingChallengeComponent
	],
	imports: [
		CommonModule,
		MatDialogModule
	],
	exports: [
		ReadingChallengeComponent
	],
	providers: [
		BooksService
	]
})
export class ReadingChallengeModule { }
