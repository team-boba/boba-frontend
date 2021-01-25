import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  dateAfterValidator(afterDate: string | null): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      if (!control.value) return null;

      const DATE_TIME_FORMAT = 'YYYY-MM-DD'
      if (!afterDate) {
        afterDate = moment(new Date(), DATE_TIME_FORMAT).format().substring(0, 10);
      }

      return control.value<afterDate ? {'dateAfter': {value: control.value}} : null;
    };
  }

  dateBeforeValidator(beforeDate: string | null): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      if (!control.value) return null;

      const DATE_TIME_FORMAT = 'YYYY-MM-DD'
      if (!beforeDate) {
        beforeDate = moment(new Date(), DATE_TIME_FORMAT).format().substring(0, 10);
      }
  
      return control.value>beforeDate ? {'dateBefore': {value: control.value}} : null;
    };
  }
}
