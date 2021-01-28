import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplicationWorkflowResponse } from './../../domain/application-workflow-response.model';
import { BehaviorSubject, Observable } from 'rxjs';

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
}
