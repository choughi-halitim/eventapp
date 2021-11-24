import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import * as moment from 'moment';
import {getStartAndEndDatetimeHelper} from '@core/helpers/get-start-and-end-datetime.helper';

export function EndBeforeStart(timeZone: string, startDateCtrl: AbstractControl, startTimeCtrl: AbstractControl, endDateCtrl: AbstractControl, endTimeCtrl: AbstractControl): ValidatorFn {

  return (): ValidationErrors | null => {

    const { start, end } = getStartAndEndDatetimeHelper(timeZone, startDateCtrl.value, startTimeCtrl.value, endDateCtrl.value, endTimeCtrl.value)

    const endBeforeStart = moment(end).isBefore(moment(start))

    return endBeforeStart ? {endBeforeStart: true } : null;

  };

}
