import { Component, OnInit } from '@angular/core';
import { TimeZoneService } from '@core/services/time-zone.service';
import * as momentTZ  from 'moment-timezone';
import * as moment  from 'moment';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TranslateService} from '@ngx-translate/core';
import {ErrorMessageService} from '@core/services/error-message.service';

@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.sass'],

})
export class AppComponent implements OnInit {

  title = 'Kumojin Event';

  constructor(private _snabar: MatSnackBar,

              private _translateService: TranslateService,

              private errorMessageService: ErrorMessageService,

              private _timeZoneService: TimeZoneService) { }

  ngOnInit(): void {

    moment.updateLocale('fr', {});

    this._timeZoneService.setTimeZoneBehaviorSubject(momentTZ.tz.guess());

    this.errorMessageService.errorMessageEvent.subscribe((errorCodeMessage: string) => {

      if (errorCodeMessage) {

        this._snabar.open(this._translateService.instant(errorCodeMessage), 'ok', {

          duration: 5000, panelClass: ['mat-warning']

        });

      }

    });

  }

}
