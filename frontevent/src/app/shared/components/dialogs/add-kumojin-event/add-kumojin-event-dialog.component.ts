import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { errorMessage } from '@core/helpers/error-message.helper';
import { KumojinEventService } from '@core/services/kumojin-event.service';
import { TimeZoneService } from '@core/services/time-zone.service';
import { Subscription } from 'rxjs';
import { KumojinEventInterface } from '@core/interfaces/kumojin-event.interface';
import { EndBeforeStart } from '@core/validators/end-before-start';
import { getStartAndEndDatetimeHelper } from '@core/helpers/get-start-and-end-datetime.helper';

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

        end: this.endCtrl = new FormControl(new Date(), [ Validators.required]),

        endTime: this.endTimeCtrl = new FormControl(new Date(), [ Validators.required ])

      }, { validators: EndBeforeStart(this.currentTimeZone, this.startCtrl, this.startTimeCtrl, this.endCtrl, this.endTimeCtrl) })

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

    const { start, end } = getStartAndEndDatetimeHelper(this.currentTimeZone, this.startCtrl.value, this.startTimeCtrl.value, this.endCtrl.value, this.endTimeCtrl.value)

    return {
      name: event.name,
      description: event.description,
      start: start,
      end: end
    };

  }

  getUtc(): string {

    return this._timeZoneService.getUtc();

  }


  getDateOnTimeZone(date: string) {

    return this._timeZoneService.getDateOnTimeZone(date);

  }

  hasEndBeforeStartError(whenGroup: AbstractControl): boolean {

    const { errors } = whenGroup;

    if (errors) {

      const { endBeforeStart } = errors;

      return !!endBeforeStart;

    }

    return false;

  }

}
