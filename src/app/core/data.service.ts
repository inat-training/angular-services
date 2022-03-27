import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { allBooks, allReaders } from 'app/data';
import { Book } from 'app/models/book';
import { BookTrackererror } from 'app/models/bookTrackerError';
import { Reader } from 'app/models/reader';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoggerService } from './logger.service';

@Injectable()
export class DataService {

  mostPopularBook: Book = allBooks[0];

  constructor(private http: HttpClient,
             private loggerService: LoggerService) { }

  setMostPopularBook(book: Book): void{
    this.mostPopularBook = book;
  }

  getAllReaders(): Observable<Reader[] | BookTrackererror>{
    return this.http.get<Reader[]>('/api/readers')
    .pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse): Observable<BookTrackererror> {
    let dataEror = new BookTrackererror();
    dataEror.errorMumber = 100;
    dataEror.message = error.statusText;
    dataEror.friendlyMessage = 'An error occured retrieving data.'
    return throwError(dataEror);
  }

  getReaderById(id: number): Reader{
    return allReaders.find(reader => reader.readerID === id);
  }

  getAllBooks(): Book[]{
    return allBooks;
  }

  getBookById(id: number): Book{
    return allBooks.find(book => book.bookID === id);
  }
}
