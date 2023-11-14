import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@NgModule({
	declarations: [
		SearchComponent
	],
	imports: [
		CommonModule,
		MatIconModule,
		MatFormFieldModule,
		FormsModule,
		MatInputModule,
	],
	exports: [
		SearchComponent
	]
})
export class SearchModule { }
