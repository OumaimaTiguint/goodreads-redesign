import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {FormsModule} from '@angular/forms';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';

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
