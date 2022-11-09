import Links from './shared/models/links';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {links} from './shared/links';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
	sidenavLinks: Links[] = links;

	constructor() {}
	
	ngOnInit(): void {
	}
}
