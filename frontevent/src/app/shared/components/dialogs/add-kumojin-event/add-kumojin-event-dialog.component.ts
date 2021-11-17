import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { errorMessage } from '@core/helpers/error-message.helper';
import { KumojinEventService } from '@core/services/kumojin-event.service';
import * as moment from 'moment';
import {map} from 'rxjs/operators';

@Component({

  templateUrl: 'add-kumojin-event-dialog.component.html',

  styleUrls: ['add-kumojin-event-dialog.component.sass']

})
export class AddKumojinEventDialogComponent {

  myDatePicker = '';

  kumojinEventFormGroup: FormGroup;

  whatFormGroup: FormGroup;
  whenFormGroup: FormGroup;

  nameCtrl: FormControl;

  descriptionCtrl: FormControl;

  startDateCtrl: FormControl;

  endDateCtrl: FormControl;

  constructor(
    private _dialogRef: MatDialogRef<AddKumojinEventDialogComponent>,
    private _kumojinEventService: KumojinEventService) {

    this.kumojinEventFormGroup = new FormGroup({

      what: this.whatFormGroup = new FormGroup({
        name: this.nameCtrl = new FormControl(null, [ Validators.required, Validators.maxLength(32) ]),

        description: this.descriptionCtrl = new FormControl(null, [ Validators.required ]),
      }),

      when: this.whenFormGroup = new FormGroup({

        startDate: this.startDateCtrl = new FormControl(new Date(), [ Validators.required ]),

        endDate: this.endDateCtrl = new FormControl(new Date(), [ Validators.required ]),

      }),


    });

    this.startDateCtrl.valueChanges.pipe(map((value) => {
      return moment(value).toISOString()
    })).subscribe((value) => {
      console.log('start value:', value);
      console.log('start value:', moment(value));
      console.log(moment(value).format());
    })

    this.endDateCtrl.valueChanges.pipe(map((value) => {
      return moment(value).toISOString()
    })).subscribe((value) => {
      console.log('end value:', value);
      console.log('end value:', moment(value));
      console.log(moment(value).format());
    })
  }

  errorMessage(formControl: AbstractControl | null): string {

    return errorMessage(formControl)

  }

  postKumojinEvent() {

    if (this.kumojinEventFormGroup.valid) {

      this._kumojinEventService.add({ ...this.whatFormGroup.value, ...this.whenFormGroup.value }).subscribe((response) => {

        if (response) {

          this._dialogRef.close(true);

        }

      });

    }

  }

}
