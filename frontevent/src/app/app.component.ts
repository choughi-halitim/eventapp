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

  }

  ngOnInit(): void {

    moment.updateLocale('fr', {});

    // Récuperer le timezone au chargement de l'application - prévoir le localstorage / session storage
    this._timeZoneService.setTimeZoneBehaviorSubject(momentTZ.tz.guess(true));

  }

}
