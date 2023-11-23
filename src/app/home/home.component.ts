import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {CurrentlyReadingComponent} from '../shared/components/currently-reading/currently-reading.component';
import {WantToReadComponent} from '../shared/components/want-to-read/want-to-read.component';
import {UpdatesComponent} from '../shared/components/updates/updates.component';
import {ReadingChallengeComponent} from '../shared/components/reading-challenge/reading-challenge.component';
import {RecommendationsComponent} from '../shared/components/recommendations/recommendations.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {SearchComponent} from '../shared/components/search/search.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import Links from '../shared/models/links';
import {links} from '../shared/links';

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
		RecommendationsComponent,
		MatExpansionModule,
		MatIconModule,
		MatSidenavModule,
		MatInputModule,
		SearchComponent,
		MatToolbarModule,
		MatButtonModule
	],
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	sidenavLinks: Links[] = links;
	constructor() { }

	ngOnInit(): void {}

}
