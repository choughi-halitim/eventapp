import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as moment from 'moment';

@Injectable()
export class TimeZoneService {

  moment = moment;

  private _timeZoneBehaviorSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  getTimeZoneBehaviorSubject(): BehaviorSubject<string> {

    return this._timeZoneBehaviorSubject;

  }

  setTimeZoneBehaviorSubject(timeZone: string): void {

    this._timeZoneBehaviorSubject.next(timeZone);

  }


  getUtc(): string {

    return this.moment.tz(this.getTimeZoneBehaviorSubject().value).format('Z')

  }

  // TODO: Start fonction for format future
  getDateOnTimeZone(date: string) {

    let dateTimeZone = this.moment(date).tz(this.getTimeZoneBehaviorSubject().value);

    return  this.moment(dateTimeZone).format('dddd DD MMMM yyyy  à HH:mm');

  }

}
