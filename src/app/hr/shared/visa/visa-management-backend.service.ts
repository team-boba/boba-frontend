import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VisaManagementRequest } from './../../domain/visa-management-request.model';
import { VisaManagementResponse } from '../../domain/visa-management-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisaManagementBackendService {

  constructor(private http: HttpClient) { }

  public getAllVisaInfo(): Observable<VisaManagementResponse> {
    const url = '/api' + '/hr/visa-management/';
    return this.http.get<VisaManagementResponse>(url);
  }
}
