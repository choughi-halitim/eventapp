import {FormControl, FormGroup, Validators} from '@angular/forms';
import {errorMessage} from '@core/helpers/error-message.helper';
import {IsInListOptionsValidator} from '@core/validators/is-in-list-options.validator';
import * as moment from 'moment';
import {EndBeforeStart} from '@core/validators/end-before-start';

describe('#ErrorMessageHelperSpec',  () => {

  it('should return error message required', () => {

    let  formControlTest = new FormControl();

    formControlTest.setValidators([Validators.required]);

    formControlTest.updateValueAndValidity();

    expect(errorMessage(formControlTest)).toBe('messages.errors.required');

  });

  it('should return error message notOptionValid', () => {

    let  formControlTest = new FormControl();

    let testOptions = ['abc', 'def', 'ghi', 'ijk'];

    formControlTest.setValidators([IsInListOptionsValidator(testOptions)]);

    formControlTest.patchValue('adc');

    expect(errorMessage(formControlTest)).toBe('messages.errors.notOptionValid');

  });

  it('should return error message maxlength', () => {

    let  formControlTest = new FormControl();

    let maxlength = 10;

    formControlTest.setValidators([Validators.maxLength(maxlength)]);

    formControlTest.patchValue('aaaaaaaaaaa');

    expect(errorMessage(formControlTest)).toBe(`messages.errors.maxlength.${maxlength}`);

  });

  it('should return error message endBeforeStart', () => {

    let startDateCtrl, startTimeCtrl, endDateCtrl, endTimeCtrl: FormControl;

    let  formGroupTest = new FormGroup({

      startDate: startDateCtrl = new FormControl(),

      startTime: startTimeCtrl =  new FormControl(),

      endDate: endDateCtrl = new FormControl(),

      endTime: endTimeCtrl = new FormControl(),

    });

    formGroupTest.setValidators([EndBeforeStart('Europe/Paris', startDateCtrl, startTimeCtrl, endDateCtrl, endTimeCtrl)]);

    formGroupTest.patchValue({

      startDate: moment().toDate(),

      startTime: moment().endOf('hours').toDate(),

      endDate: moment().toDate(),

      endTime: moment().startOf('hours').toDate()

    });

    expect(errorMessage(formGroupTest)).toBe('messages.errors.endBeforeStart');

  });

})
