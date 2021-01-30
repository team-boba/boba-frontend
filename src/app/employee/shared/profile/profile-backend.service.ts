import { ContactRequest } from './../../domain/ContactRequest.model';
import { AddressRequest } from './../../domain/AddressRequest.model';
import { EmployeeRequest } from './../../domain/EmployeeRequest.model';
import { PersonRequest } from './../../domain/PersonRequest.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonResponse } from '../../domain/profile/PersonResponse.model';
import { PersonalDocumentRequest } from '../../domain/PersonalDocumentRequest.model';
import { ListPersonalDocumentsRequest } from '../../domain/ListPersonalDocumentsRequest.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileBackendService {

  constructor(private http: HttpClient) { }

  getPersonResponse(userId: number): Observable<PersonResponse> {
    const url = '/api/employee/profile/' + userId;
    return this.http.get<PersonResponse>(url);
  }

  async updatePersonRequest(returnUserId: number, personRequest: PersonRequest) {
    personRequest.userId = returnUserId;
    const url = '/api/employee/profile/update-person/' + returnUserId;
    return await this.http.post(url, personRequest).toPromise();
  }

  async updateEmployeeRequest(returnUserId: number, employeeRequest: EmployeeRequest) {
    const url = '/api/employee/profile/update-employee/' + returnUserId;
    return await this.http.post(url, employeeRequest).toPromise();
  }

  async updateAddressRequest(returnUserId: number, addressRequest: AddressRequest) {
    const url = '/api/employee/profile/update-address/' + returnUserId;
    return await this.http.post(url, addressRequest).toPromise();
  }

  async updateContactRequest(returnUserId: number, contactRequest: ContactRequest) {
    const url = '/api/employee/profile/update-contact/' + returnUserId;
    return await this.http.post(url, contactRequest).toPromise();
  }

  async updatePersonalDocumentsRequest(returnUserId: number, listPersonalDocumentsRequest: ListPersonalDocumentsRequest) {
    const url = '/api/employee/profile/update-personal-documents/' + returnUserId;
    return await this.http.post(url, listPersonalDocumentsRequest).toPromise();
  }
}
