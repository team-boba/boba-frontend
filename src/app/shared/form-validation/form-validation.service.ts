import { Injectable } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  dateAfterValidator(testDate: string, afterDate: string): ValidatorFn {

  }
}
