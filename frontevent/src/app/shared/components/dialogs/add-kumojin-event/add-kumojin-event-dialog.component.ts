import {Component, OnDestroy, OnInit} from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { errorMessage } from '@core/helpers/error-message.helper';
import { KumojinEventService } from '@core/services/kumojin-event.service';
import * as moment from 'moment';
import {TimeZoneService} from '@core/services/time-zone.service';
import {Subscription} from 'rxjs';
import {KumojinEventInterface} from '@core/interfaces/kumojin-event.interface';

@Component({

  templateUrl: 'add-kumojin-event-dialog.component.html',

  styleUrls: ['add-kumojin-event-dialog.component.sass']

})
export class AddKumojinEventDialogComponent implements OnInit, OnDestroy {

  currentTimeZone!: string;

  timeZoneSubscription!: Subscription;

  kumojinEventFormGroup: FormGroup;

  whatFormGroup: FormGroup;
  whenFormGroup: FormGroup;

  nameCtrl: FormControl;

  descriptionCtrl: FormControl;

  startCtrl: FormControl;
  startTimeCtrl!: FormControl;

  endCtrl: FormControl;
  endTimeCtrl!: FormControl;

  constructor(private _dialogRef: MatDialogRef<AddKumojinEventDialogComponent>,
              private _timeZoneService: TimeZoneService,
              private _kumojinEventService: KumojinEventService) {

    this.kumojinEventFormGroup = new FormGroup({

      what: this.whatFormGroup = new FormGroup({

        name: this.nameCtrl = new FormControl(null, [ Validators.required, Validators.maxLength(32) ]),

        description: this.descriptionCtrl = new FormControl(null, [ Validators.required ])

      }),

      when: this.whenFormGroup = new FormGroup({

        start: this.startCtrl = new FormControl(new Date(), [ Validators.required ]),

        startTime: this.startTimeCtrl = new FormControl(new Date(), [ Validators.required ]),

        end: this.endCtrl = new FormControl(new Date(), [ Validators.required ]),

        endTime: this.endTimeCtrl = new FormControl(new Date(), [ Validators.required ])

      })

    });

  }

  ngOnInit() {

    this.timeZoneSubscription = this._timeZoneService.getTimeZoneBehaviorSubject().subscribe((timeZone) => {

      this.currentTimeZone = timeZone;

    });
  }

  ngOnDestroy() {

    if (this.timeZoneSubscription) { this.timeZoneSubscription.unsubscribe(); }

  }

  errorMessage(formControl: AbstractControl | null): string {

    return errorMessage(formControl)

  }

  postKumojinEvent() {

    if (this.kumojinEventFormGroup.valid) {

      const kumojinEventData = this.changeOnFormTimeZoneDates();

      this._kumojinEventService.add(kumojinEventData).subscribe((response) => {

        if (response) {

          this._dialogRef.close(true);

        }

      });

    }

  }

  changeOnFormTimeZoneDates(): KumojinEventInterface {

    const event = { ...this.whatFormGroup.value, ...this.whenFormGroup.value };

    let start = moment(event.start).set({

      hour: moment(this.startTimeCtrl.value).hour(),

      minute: moment(this.startTimeCtrl.value).minute(),

      second: 0

    }).utcOffset(this.getUtc(), true);

    let end = moment(event.end).set({

      hour: moment(this.endTimeCtrl.value ?? '00').hour(),

      minute: moment(this.endTimeCtrl.value ?? '00').minute(),

      second: 0

    }).utcOffset(this.getUtc(), true);

    return {
      name: event.name,
      description: event.description,
      start: start.toISOString(true),
      end: end.toISOString(true)
    };
  }

  getUtc(): string {

    return moment.tz(this.currentTimeZone).format('Z')

  }


  getDateOnTimeZone(date: string) {
    return  moment(date).tz(this.currentTimeZone).format('dddd DD MMMM yyyy  à HH:mm')
  }

}
