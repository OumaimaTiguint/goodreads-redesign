import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import Book from '../models/book';

@Injectable({
  	providedIn: 'root'
})
export class BooksService {
	defaultURL = "http://localhost:5000/books/";

  	constructor(private http: HttpClient) {
	}

	getAllBooks(): Observable<any> {
        return this.http.get(this.defaultURL);
    }

	addBook(book: Book): Observable<any> {
		return this.http.post(this.defaultURL + 'add/', book);
	}

	updateBook(id:any, book:Book): Observable<any> {
		return this.http.post(this.defaultURL + 'update/' + id, book);
	}
}
