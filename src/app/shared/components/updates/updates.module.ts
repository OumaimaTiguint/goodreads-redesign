import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UpdatesComponent} from './updates.component';
import {StarRatingModule} from 'angular-star-rating';
import {MatCardModule} from '@angular/material/card';

@NgModule({
	declarations: [
		UpdatesComponent
	],
	imports: [
		CommonModule,
		StarRatingModule,
		MatCardModule
	],
	exports: [
		UpdatesComponent
	]
})
export class UpdatesModule { }
