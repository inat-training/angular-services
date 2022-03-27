import { Component, OnInit , VERSION} from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Book } from "app/models/book";
import { Reader } from "app/models/reader";
import { LoggerService } from 'app/core/logger.service';
import { DataService } from 'app/core/data.service';
import { BookTrackererror } from 'app/models/bookTrackerError';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  allBooks: Book[];
  allReaders: Reader[];
  mostPopularBook: Book;

  constructor(private loggerService: LoggerService,
              private dataService: DataService,
              private title: Title
              ) {
    this.loggerService.log('Creating the dashboard');
   }

  ngOnInit() {
    this.allBooks = this.dataService.getAllBooks();
    this.dataService.getAllReaders().subscribe(
      (data: Reader[] | BookTrackererror) => this.allReaders = <Reader[]>data,
      (err: BookTrackererror) => this.loggerService.log(err.friendlyMessage),
      () => this.loggerService.log('All done getting reader!')
    )
    this.mostPopularBook = this.dataService.mostPopularBook;
    this.title.setTitle(`Book Tracker ${VERSION.full}`)
    this.loggerService.log('Done with dashboard initialization');

    // throw new Error('Ugly technical error');
  }

  deleteBook(bookID: number): void {
    console.warn(`Delete book not yet implemented (bookID: ${bookID}).`);
  }

  deleteReader(readerID: number): void {
    console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
  }

}
