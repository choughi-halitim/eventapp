import {BehaviorSubject} from 'rxjs';

export class TimezoneStubService {

  private _timeZoneBehaviorSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  getTimeZoneBehaviorSubject(): BehaviorSubject<string> {

    return this._timeZoneBehaviorSubject;

  }

  setTimeZoneBehaviorSubject(timeZone: string): void {

    this._timeZoneBehaviorSubject.next(timeZone);

  }

}
