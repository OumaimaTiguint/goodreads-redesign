import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, tap, catchError, throwError, Observable} from 'rxjs';

@Injectable({
  	providedIn: 'root'
})
export class AuthService {
	private isAuthenticatedSubject: BehaviorSubject<boolean>;
	baseUrl: string = 'http://localhost:5000/user/';

	constructor(private http: HttpClient) {
		this.isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
	}

	register(username: string, password: string) {
		return this.http.post(this.baseUrl + 'register', {username, password});
	}

	login(username: string, password: string) {
		return this.http.post(this.baseUrl + 'login', {username, password})
		.pipe(
			tap((response: any) => {
			  	const isAuthenticated = response.message === 'User found';
			  	this.isAuthenticatedSubject.next(isAuthenticated);
			}),
			catchError((error: any) => {
			  	console.log(error);
			  	return throwError(error);
			})
		  );
	}

	logout(): void {
		this.isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
	}
	
	setAuthenticated(isAuthenticated: boolean): void {
		this.isAuthenticatedSubject.next(isAuthenticated);
	}
	
	isAuthenticated(): Observable<boolean> {
		return this.isAuthenticatedSubject.asObservable();
	}
}
