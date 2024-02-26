import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import Book from '../models/book';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  	providedIn: 'root'
})
export class UserService {
	baseUrl: string = "http://localhost:5000/user/";
	private userSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  	public user$: Observable<any> = this.userSubject.asObservable();

	constructor(private http: HttpClient) {}

	setUser(user: any): void {
		this.userSubject.next(user);
	}

	getUser(): Observable<any> {
		return this.userSubject.asObservable();
	}

  	getAllUsers(id: string) {
		return this.http.get(this.baseUrl + "allUsers/" + id);
  	}

  	getUserById(id: string) {
		return this.http.get(this.baseUrl + "user/" + id);
  	}

  	updateUser(userId: any, action: string, bookId?: string, bookInfo?: Book) {
		return this.http.post(`${this.baseUrl}update/${userId}`, {action, bookId, bookInfo});
  	}
}
