import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {CurrentlyReadingComponent} from '../shared/components/currently-reading/currently-reading.component';
import {WantToReadComponent} from '../shared/components/want-to-read/want-to-read.component';
import {UpdatesComponent} from '../shared/components/updates/updates.component';
import {ReadingChallengeComponent} from '../shared/components/reading-challenge/reading-challenge.component';
import {RecommendationsComponent} from '../shared/components/recommendations/recommendations.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [
		CommonModule,
		CurrentlyReadingComponent,
		WantToReadComponent,
		MatGridListModule,
		UpdatesComponent,
		ReadingChallengeComponent,
		RecommendationsComponent
	],
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {}

}
