import {MatCardModule} from '@angular/material/card';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecommendationsComponent} from './recommendations.component';

@NgModule({
	declarations: [
		RecommendationsComponent
	],
	imports: [
		CommonModule,
		MatCardModule
	],
	exports: [
		RecommendationsComponent
	]
})
export class RecommendationsModule { }
