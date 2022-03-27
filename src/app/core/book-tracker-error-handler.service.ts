import { Injectable, ErrorHandler } from '@angular/core';
import { BookTrackererror } from 'app/models/bookTrackerError';
import { LoggerService } from './logger.service';

@Injectable()
export class BookTrackerErrorHandlerService implements ErrorHandler {

  constructor(private loggerService: LoggerService) { }

  handleError(error: any): void {
    let customError: BookTrackererror = new BookTrackererror();
    customError.errorMumber = 200;
    customError.message = (<Error>error).message;
    customError.friendlyMessage = 'An error occured. Please try again.'

    console.log(customError);
    
  }
}
