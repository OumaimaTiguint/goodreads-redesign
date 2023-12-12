import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import Book from '../models/book';

@Injectable({
  	providedIn: 'root'
})
export class UserService {
	baseUrl: string = "http://localhost:5000/user/";

	constructor(private http: HttpClient) {}

  	getAllUsers(id: string) {
		return this.http.get(this.baseUrl + "allUsers/" + id);
  	}

  	getUserById(id: string) {
		return this.http.get(this.baseUrl + "user/" + id);
  	}

  	updateUser(id: string, books:Book[]) {
		return this.http.post(this.baseUrl + "update/" + id, {books});
  	}
}
