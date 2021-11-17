import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {catchError, finalize, of} from 'rxjs';
import * as moment  from 'moment';
import { FormControl } from '@angular/forms';
import { IsInListOptionsValidator } from '@core/validators/is-in-list-options.validator';
import {TimeZoneService} from '@core/services/time-zone.service';
import { AddKumojinEventDialogComponent } from '@shared/components/dialogs/add-kumojin-event/add-kumojin-event-dialog.component';


@Component({

  selector: 'app-header',

  templateUrl: 'header.component.html',

  styleUrls: [ 'header.component.sass' ],

})
export class HeaderComponent implements OnInit {

  @Input() title!: string;

  currentTimeZone!: string;

  timeZoneCtrl = new FormControl( null, IsInListOptionsValidator(moment.tz.names()));

  constructor(

    private timeZoneService: TimeZoneService,

    private dialog: MatDialog ) { }

  ngOnInit() {

    this.timeZoneCtrl.patchValue(this.currentTimeZone, { emitEvent: false });

    this.timeZoneService.getTimeZoneBehaviorSubject().subscribe((timeZone) => {

      this.currentTimeZone = timeZone;

      this.timeZoneCtrl.patchValue('');

      this.timeZoneCtrl.markAsPristine();

    });
  }

  addEvent() {

    let dialogSub = this.dialog.open(AddKumojinEventDialogComponent, {

      minWidth: '40%', minHeight: '60%', autoFocus: false, restoreFocus: false

    }).afterClosed().pipe(

      catchError((error) => of(error)),

      finalize(() => { if (dialogSub) { dialogSub.unsubscribe(); }

    })).subscribe((response) => {

      if (response) {

      }

    });

  }

  timeZoneChange() {

    if (this.timeZoneCtrl.valid) {

      this.timeZoneService.setTimeZoneBehaviorSubject(this.timeZoneCtrl.value);

    }
  }

  getUtc(): string {
    return moment.tz(this.currentTimeZone).format('Z')
  }
}
