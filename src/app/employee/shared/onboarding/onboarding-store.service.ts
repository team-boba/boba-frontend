import { Injectable } from '@angular/core';
import { EmployeeRequest } from './../../domain/EmployeeRequest.model'
import { PersonRequest } from './../../domain/PersonRequest.model'
import { AddressRequest } from './../../domain/AddressRequest.model'
import { OnboardingRequest } from './../../domain//OnboardingRequest.model'
import { Subject } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OnboardingStoreService {
  userId: number;

  constructor() { }

  currentOnboardingRequest: OnboardingRequest;

  newCurrentOnboardingRequest() {
    this.currentOnboardingRequest = new OnboardingRequest();
  }

  setEmployeeOfCurrentOnboardingRequest(employeeReq: EmployeeRequest) {
    this.currentOnboardingRequest.employeeRequest = employeeReq;
  }

  setPersonOfCurrentOnboardingRequest(personRequest: PersonRequest) {
    this.currentOnboardingRequest.personRequest = personRequest;
  }

  setAddressOfCurrentOnboardingRequest(addressRequest: AddressRequest) {
    this.currentOnboardingRequest.addressRequest = addressRequest;
  }

  // setContactOfCurrentOnboardingRequest(contactRequest: ContactRequest) {
  //   this.currentOnboardingRequest.contactRequest = contactRequest;
  // }

  getCurrentOnboardingRequest() {
    return this.currentOnboardingRequest;
  }

}
