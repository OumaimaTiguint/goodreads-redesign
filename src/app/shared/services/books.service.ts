import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import Book from '../models/book';

@Injectable({
  	providedIn: 'root'
})
export class BooksService {

  	constructor(private http: HttpClient) {
	}

	gettAllBooks(): Observable<any> {
        return this.http.get('http://localhost:5000/');
    }

	addBook(book: Book): Observable<any> {
		return this.http.post('http://localhost:5000/add', book);
	}

	updateBook(id:any, book:Book): Observable<any> {
		return this.http.post('http://localhost:5000/update/'+id, book);
	}
}
