import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import * as moment from 'moment';
import { TimeZoneService } from '@core/services/time-zone.service';
import {IsInListOptionsValidator} from '@core/validators/is-in-list-options.validator';

@Component({

  selector: 'app-select-timezone',

  templateUrl: './select-timezone.component.html',

  styleUrls: ['./select-timezone.component.sass'],

})
export class SelectTimezoneComponent implements OnInit {

  timeZones = moment.tz.names();

  filteredTimeZonesOptions!: Observable<string[]>;

  timeZoneCtrl = new FormControl( null, IsInListOptionsValidator(moment.tz.names()));

  constructor( private _timeZoneService: TimeZoneService) {
  }

  ngOnInit() {

    this.filteredTimeZonesOptions = this.timeZoneCtrl.valueChanges.pipe(

      startWith(''),

      map(value => this._filter(value)),

    );

  }

  private _filter(value: string): string[] {

      return this.timeZones.filter(timeZone => timeZone.toLowerCase().includes(value.toLowerCase()));

  }

  timeZoneChange() {

    if (this.timeZoneCtrl.valid) {

      this._timeZoneService.setTimeZoneBehaviorSubject(this.timeZoneCtrl.value);

      this.timeZoneCtrl.patchValue('');

      this.timeZoneCtrl.markAsPristine();

    }

  }

}
