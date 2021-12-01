import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TimeZoneService } from '@core/services/time-zone.service';
import * as moment from 'moment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-display-date-timezone-format',

  template: '<span>{{ dateFormat }} -- {{ timezone }}</span>',

  styles: []

})
export class DisplayDateTimezoneFormatComponent implements OnInit, OnDestroy {

  dateFormat!: string;

  timezone!: string;

  timezoneSubscription!: Subscription;

  @Input() date!: string;

  constructor(private _timezoneService: TimeZoneService) {

    this.timezone = this._timezoneService.getTimeZoneBehaviorSubject().getValue();

  }

  ngOnInit(): void {

    this.timezoneSubscription = this._timezoneService.getTimeZoneBehaviorSubject().subscribe((timezone) => {

      this.timezone = timezone;

      this.dateFormat =  moment(this.date).tz(timezone).format('dddd DD MMMM yyyy HH:mm');

    });

  }

  ngOnDestroy(): void {

    if (this.timezoneSubscription) {

      this.timezoneSubscription.unsubscribe();

    }

  }

}
