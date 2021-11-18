import { Component, OnInit } from '@angular/core';
import { TimeZoneService } from '@core/services/time-zone.service';
import * as momentTZ  from 'moment-timezone';
import * as moment  from 'moment';

@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.sass'],

  providers: [ ]
})
export class AppComponent implements OnInit {

  title = 'Kumojin Event';

  constructor(private _timeZoneService: TimeZoneService) {
    moment.updateLocale('fr', {});
    _timeZoneService.setTimeZoneBehaviorSubject(momentTZ.tz.guess(true));
  }

  ngOnInit(): void {


  }

}
