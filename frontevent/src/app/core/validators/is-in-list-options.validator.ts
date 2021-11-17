import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function IsInListOptionsValidator(options: string[]): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {

    const notOptionValid = !options.find(option => option === control.value);

    return notOptionValid ? {notOptionValid: true } : null;

  };

}
