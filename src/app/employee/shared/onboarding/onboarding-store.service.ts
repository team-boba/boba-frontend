import { Injectable } from '@angular/core';
import { EmployeeRequest } from './../../domain/EmployeeRequest.model'
import { PersonRequest } from './../../domain/PersonRequest.model'
import { AddressRequest } from './../../domain/AddressRequest.model'
import { ContactRequest } from './../../domain/ContactRequest.model'
import { OnboardingRequest } from './../../domain//OnboardingRequest.model'
import { Subject } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OnboardingStoreService {
  
  // currentOnboardingRequest: Subject<OnboardingRequest> = new Subject<OnboardingRequest>();

  // newCurrentOnboardingRequest() {
  //   let tmp: OnboardingRequest = new OnboardingRequest();
  //   this.currentOnboardingRequest.next(tmp);
  // }

  // setEmployeeOfCurrentOnboardingRequest(employeeReq: EmployeeRequest) {
  //   this.currentOnboardingRequest.pipe(
  //     map(currentOnboardingRequest => ({...currentOnboardingRequest, employeeRequest: employeeReq})),
  //     tap(currentOnboardingRequest => console.log(currentOnboardingRequest)) // will display the new currentOnboardingRequest 
  //   )
  // }

  // getCurrentOnboardingRequest() {
  //   return this.currentOnboardingRequest.asObservable();
  // }

  currentOnboardingRequest: OnboardingRequest;

  constructor() { }

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
