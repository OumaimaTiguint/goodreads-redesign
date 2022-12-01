import {RecommendationsModule} from './../shared/components/recommendations/recommendations.module';
import {ReadingChallengeModule} from './../shared/components/reading-challenge/reading-challenge.module';
import {UpdatesModule} from './../shared/components/updates/updates.module';
import {WantToReadModule} from './../shared/components/want-to-read/want-to-read.module';
import {CurrentlyReadingModule} from './../shared/components/currently-reading/currently-reading.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
	declarations: [
		HomeComponent
	],
	imports: [
		CommonModule,
		CurrentlyReadingModule,
		WantToReadModule,
		MatGridListModule,
		UpdatesModule,
		ReadingChallengeModule,
		RecommendationsModule
	]
})
export class HomeModule { }
