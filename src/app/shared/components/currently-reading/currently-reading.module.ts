import {CurrentlyReadingComponent} from './currently-reading.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
	declarations: [
		CurrentlyReadingComponent
	],
	imports: [
		CommonModule,
		MatButtonModule
	],
	exports: [
		CurrentlyReadingComponent
	]
})
export class CurrentlyReadingModule { }
