import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, tap, catchError, throwError, Observable} from 'rxjs';

@Injectable({
  	providedIn: 'root'
})
export class AuthService {
	private isAuthenticatedSubject: BehaviorSubject<boolean>;
	baseUrl: string = 'http://localhost:5000/user/';
	private authTokenKey: string = 'authToken';

	constructor(private http: HttpClient) {
		const storedToken = localStorage.getItem(this.authTokenKey);
		this.isAuthenticatedSubject = new BehaviorSubject<boolean>(!!storedToken);
	}

	register(username: string, password: string) {
		return this.http.post(this.baseUrl + 'register', {username, password});
	}

	login(username: string, password: string) {
		return this.http.post(this.baseUrl + 'login', {username, password})
		.pipe(
			tap((response: any) => {
				if (response.token) {
					localStorage.setItem(this.authTokenKey, response.token);
					const isAuthenticated = response.message === 'User found';
					this.isAuthenticatedSubject.next(isAuthenticated);
				}
			}),
			catchError((error: any) => {
			  	console.log(error);
			  	return throwError(() => error);
			})
		  );
	}

	logout(): void {
		localStorage.removeItem(this.authTokenKey);
		this.isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
	}
	
	setAuthenticated(isAuthenticated: boolean): void {
		this.isAuthenticatedSubject.next(isAuthenticated);
	}
	
	isAuthenticated(): Observable<boolean> {
		return this.isAuthenticatedSubject.asObservable();
	}
}
