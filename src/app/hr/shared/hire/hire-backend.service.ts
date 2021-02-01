import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplicationWorkflowResponse } from './../../domain/application-workflow-response.model';
import { ApplicationWorkflowRequest } from '../../domain/application-workflow-request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HireBackendService {

  private hireUrl = '/hr/hire';  

  constructor(private http: HttpClient) { }

  public getAllApplicationWorkflows(): Observable<ApplicationWorkflowResponse> {
    const url = '/api' + this.hireUrl + '/application-review';
    return this.http.get<ApplicationWorkflowResponse>(url);
  }

  public updateApplicationStatus(applicationWorkflowRequest: ApplicationWorkflowRequest) {
    const url = '/api' + this.hireUrl + '/application-review/update';
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<ApplicationWorkflowRequest>(url, applicationWorkflowRequest, {headers});
  }
}
