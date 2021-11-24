import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class ErrorMessageService {

  private _errorMessageEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  sendErrorMessage(errorCodeMessage: string): void{
    return this._errorMessageEvent.emit(errorCodeMessage);

  }

  get errorMessageEvent(): EventEmitter<string> {
    return this._errorMessageEvent;
  }

}
