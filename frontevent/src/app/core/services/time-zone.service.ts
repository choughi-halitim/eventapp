import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TimeZoneService {

  private _timeZoneBehaviorSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {
  }

  getTimeZoneBehaviorSubject(): BehaviorSubject<string> {

    return this._timeZoneBehaviorSubject;

  }

  setTimeZoneBehaviorSubject(timeZone: string): void {

    this._timeZoneBehaviorSubject.next(timeZone);

  }

}
