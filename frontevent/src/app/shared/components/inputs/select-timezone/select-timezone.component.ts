import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import * as moment from 'moment';
import {errorMessage} from '@core/helpers/error-message.helper';

@Component({
  selector: 'app-select-timezone',
  templateUrl: './select-timezone.component.html',
  styleUrls: ['./select-timezone.component.sass'],
})
export class SelectTimezoneComponent implements OnInit {


  timeZones = moment.tz.names();

  filteredTimeZonesOptions!: Observable<string[]>;

  @Input('timeZone') timeZone!: string;

  @Input('timeZoneCtrl') timeZoneCtrl!: FormControl;

  constructor() {
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

  errorMessage(formControl: FormControl): string {

    return errorMessage(formControl);

  }

}
