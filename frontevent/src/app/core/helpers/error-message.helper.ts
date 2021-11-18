import {AbstractControl } from '@angular/forms';

export const errorMessage = (formControl: AbstractControl | null): string => {

  if (formControl) {

    const { errors } = formControl;

    if (errors) {

      console.log(errors);

      const { required, notOptionValid, maxLength } = errors;

      if (required) { return 'messages.errors.required'; }

      if (notOptionValid) { return 'messages.errors.notOptionValid'; }

      if(maxLength) { return 'messages.errors.notOptionValid'; }
    }
  }

  return '';
}
