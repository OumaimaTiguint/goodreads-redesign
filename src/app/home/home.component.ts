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
import {MatMenuModule} from '@angular/material/menu';
import Links from '../shared/models/links';
import {links} from '../shared/links';
import {ActivatedRoute, Router} from '@angular/router';
import User from '../shared/models/user';
import {Observable, Subject, finalize, startWith, switchMap} from 'rxjs';
import {UserService} from '../shared/services/user.service';
import {AuthService} from '../shared/services/auth/auth.service';

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
		MatButtonModule,
		MatMenuModule
	],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
	sidenavLinks: Links[] = links;
	user: any;
	userId!: string;
	allUsers$: Observable<User[] | any> | undefined;
	private userUpdateSubject = new Subject<void>();

	constructor(private route: ActivatedRoute,
				private router: Router,
				private userService: UserService,
				private authService: AuthService) { }

	getUsers(id: any) {
		//this.loading = true;
		this.allUsers$ = this.userUpdateSubject.pipe(
			startWith(null),
			switchMap(() =>
				this.userService.getAllUsers(id).pipe(
					finalize(() => {
						//this.loading = false;
					}))));
	}

	logout() {
		this.authService.logout();
		this.router.navigate(['/signin']);
	}

	ngOnInit(): void {
		this.userId = this.route.snapshot.queryParams['userId'];
		this.userService.getUserById(this.userId)
		  	.pipe(
				finalize(() => {
			  		//this.loading = false;
				})
		  	).subscribe((response: any) => {
				this.user = response;
				this.getUsers(this.userId);
		  	}, (error) => {
				console.log(error);
		  	});
	}

}
