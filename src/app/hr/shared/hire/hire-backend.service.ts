import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplicationWorkflowResponse } from './../../domain/application-workflow-response.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { PersonResponse } from './../../../employee/domain/profile/PersonResponse.model'
import { ApplicationWorkflowRequest } from '../../domain/application-workflow-request.model';

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

  // public getApplicationDetail(applicationId: number): Observable<PersonResponse> {
  //   const url = '/api' + this.hireUrl + '/application-review/' + applicationId;
  //   return this.http.get<PersonResponse>(url);
  // }

  // public updateApplicationStatus(applicationId: number, comments: string, status: string, personResponse: PersonResponse): Observable<PersonResponse> {
  //   const url = '/api' + this.hireUrl + '/application-review/update/' + applicationId + "/" + comments + "/" + ;
  //   return this.http.post<PersonResponse>(url, personResponse)
  //     .pipe(
  //       // catchError(this.handleError('PersonResponse', personResponse))
  //     );
  // }
  public updateApplicationStatus(applicationWorkflowRequest: ApplicationWorkflowRequest) {
    const url = '/api' + this.hireUrl + '/application-review/update';
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<ApplicationWorkflowRequest>(url, applicationWorkflowRequest, {headers});
  }
}
