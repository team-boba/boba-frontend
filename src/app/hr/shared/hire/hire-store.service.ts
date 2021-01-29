import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplicationWorkflowResponse } from './../../domain/application-workflow-response.model';
import { ApplicationWorkflowRequest } from '../../domain/application-workflow-request.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HireBackendService } from './hire-backend.service';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HireStoreService {
  private applicationWorkflowRequests: BehaviorSubject<ApplicationWorkflowRequest[]> = new BehaviorSubject([]); // all the application flows
  
  applicationId: number;

  constructor(
    private hireBackendService: HireBackendService,
    private router: Router) {
    this.loadInitialData();
  }

  // get all the application flows
  loadInitialData() {
    this.hireBackendService.getAllApplicationWorkflows()
      .subscribe(
          (data) => {

            if (data.serviceStatus.success) {
              let applicationWorkflowRequests = data.applicationWorkflowRequests.map(applicationWorkflowRequest => {
                return new ApplicationWorkflowRequest(
                  applicationWorkflowRequest.id,
                  applicationWorkflowRequest.createdDate,
                  applicationWorkflowRequest.modificationDate,
                  applicationWorkflowRequest.status,
                  applicationWorkflowRequest.comments,
                  applicationWorkflowRequest.type,
                  applicationWorkflowRequest.userId,
                  applicationWorkflowRequest.firstName,
                  applicationWorkflowRequest.lastName,
                  applicationWorkflowRequest.middleName,
                  applicationWorkflowRequest.email
                );
              });

              this.applicationWorkflowRequests.next(applicationWorkflowRequests);
            }
          },
          err => console.log("Error retrieving applicationWorkflows")
      );
  }

  getApplicationWorkflows() {
    return this.applicationWorkflowRequests.asObservable();
  }

  getApplicationWorkflow(id: number): Observable<ApplicationWorkflowRequest> {
    return this.applicationWorkflowRequests.pipe(
      map(items => items.find(item => item.id === id)),
    );
  }
}
