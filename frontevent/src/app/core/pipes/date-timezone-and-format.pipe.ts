import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { TimeZoneService } from '../services/time-zone.service';
import {Observable} from 'rxjs';

@Pipe({ name: 'dateTimeZoneFormat' })
export class DateTimezoneAndFormatPipe implements PipeTransform {

  constructor(private _timezone: TimeZoneService) {
  }
  transform(value: Date | moment.Moment, dateFormat: string): any {
    return Observable.create();
  }
}
