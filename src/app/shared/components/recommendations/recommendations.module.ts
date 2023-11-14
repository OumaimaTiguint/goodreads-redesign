import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
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
