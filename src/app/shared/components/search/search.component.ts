import { CommonModule } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
	selector: 'app-search',
	standalone: true,
	imports: [
		CommonModule,
		MatIconModule,
		MatFormFieldModule,
		FormsModule,
		MatInputModule
	],
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	value: string = '';
	
	constructor() { }

	ngOnInit(): void {
	}

}
