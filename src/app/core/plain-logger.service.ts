import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
  export class PlainLoggerService implements LoggerService{

  constructor() { }
  log(message: string): void {
    throw new Error('Method not implemented.');
  }
  error(message: string): void {
    throw new Error('Method not implemented.');
  }
}
