import {BookInfoModalModule} from './../book-info-modal/book-info-modal.module';
import {WantToReadComponent} from './want-to-read.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

@NgModule({
	declarations: [
		WantToReadComponent
	],
	imports: [
		CommonModule,
		BookInfoModalModule
	],
	exports: [
		WantToReadComponent
	]
})
export class WantToReadModule { }
