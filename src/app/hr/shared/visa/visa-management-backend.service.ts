import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VisaManagementRequest } from './../../domain/visa-management-request.model';
import { VisaManagementUploadRequest } from './../../domain/visa-management-upload-request.model';
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

  public uploadOPTFile(visaManagementUploadRequest: VisaManagementUploadRequest) {
    const url = '/api' + '/hr/visa-management/uploadDocument';
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<VisaManagementUploadRequest>(url, visaManagementUploadRequest, {headers});
  }
}
