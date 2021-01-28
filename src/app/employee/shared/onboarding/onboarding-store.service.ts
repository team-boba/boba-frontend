import { Injectable } from '@angular/core';
import { EmployeeRequest } from './../../domain/EmployeeRequest.model'
import { PersonRequest } from './../../domain/PersonRequest.model'
import { AddressRequest } from './../../domain/AddressRequest.model'
import { ContactRequest } from './../../domain/ContactRequest.model'
import { PersonalDocumentRequest } from './../../domain/PersonalDocumentRequest.model'
import { OnboardingRequest } from './../../domain//OnboardingRequest.model'
import { Subject } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OnboardingStoreService {
  userId: number;
  houseId: number;

  constructor() { }

  currentOnboardingRequest: OnboardingRequest;

  newCurrentOnboardingRequest() {
    this.currentOnboardingRequest = new OnboardingRequest();
  }

  setEmployeeOfCurrentOnboardingRequest(employeeReq: EmployeeRequest) {
    employeeReq.houseId = this.houseId;
    this.currentOnboardingRequest.employeeRequest = employeeReq;
  }

  setPersonOfCurrentOnboardingRequest(personRequest: PersonRequest) {
    personRequest.userId = this.userId;
    this.currentOnboardingRequest.personRequest = personRequest;
  }

  setAddressOfCurrentOnboardingRequest(addressRequest: AddressRequest) {
    this.currentOnboardingRequest.addressRequest = addressRequest;
  }

  setContactOfCurrentOnboardingRequest(contactRequest: ContactRequest) {
    this.currentOnboardingRequest.contactRequest = contactRequest;
  }

  setPersonalDocumentOfCurrentOnboardingRequest(personalDocumentRequests: PersonalDocumentRequest[]) {
    this.currentOnboardingRequest.personalDocumentRequests = personalDocumentRequests;
  }

  getCurrentOnboardingRequest() {
    return this.currentOnboardingRequest;
  }
}
