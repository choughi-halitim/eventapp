import {AbstractControl } from '@angular/forms';

export const errorMessage = (formControl: AbstractControl | null): string => {

  if (formControl) {

    const { errors } = formControl;

    if (errors) {

      const { required, notOptionValid, maxlength, endBeforeStart } = errors;

      if (required) { return 'messages.errors.required'; }

      if (notOptionValid) { return 'messages.errors.notOptionValid'; }

      if (maxlength) {

        const { requiredLength } = maxlength;

        return `messages.errors.maxlength.${requiredLength || 0}`;
      }

      if (endBeforeStart) {

        return `messages.errors.endBeforeStart`;

      }

    }

  }

  return '';
}
