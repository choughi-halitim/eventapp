import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as moment  from 'moment';
import { TimeZoneService } from '@core/services/time-zone.service';
import { AddKumojinEventDialogComponent } from '@shared/components/dialogs/add-kumojin-event/add-kumojin-event-dialog.component';

@Component({

  selector: 'app-header',

  templateUrl: 'header.component.html',

  styleUrls: [ 'header.component.sass' ],

})
export class HeaderComponent {

  @Input() title!: string;

  currentTimeZone!: string;

  constructor(

    private _timeZoneService: TimeZoneService,

    private _dialog: MatDialog ) {

    this._timeZoneService.getTimeZoneBehaviorSubject().subscribe((timeZone) => {

      this.currentTimeZone = timeZone;

    });

  }

  addEvent() {

    this._dialog.open(AddKumojinEventDialogComponent, {

      minWidth: '40%', minHeight: '60%', autoFocus: false, restoreFocus: false

    });

  }

  getUtc(): string {

    return moment.tz(this.currentTimeZone).format('Z')

  }

}
