import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplicationWorkflowResponse } from './../../domain/application-workflow-response.model';
import { ApplicationWorkflowRequest } from '../../domain/application-workflow-request.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HireBackendService } from './hire-backend.service';
import { Person } from '../../../employee/domain/profile/Person.model';
import { PersonResponse } from './../../../employee/domain/profile/PersonResponse.model'
import { Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HireStoreService {
  private applicationWorkflowRequests: BehaviorSubject<ApplicationWorkflowRequest[]> = new BehaviorSubject([]); // all the application flows
  
  applicationId: number;
  // person$: BehaviorSubject<Person> = new BehaviorSubject(null); // application details

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

  // get application detail
  // loadPerson(applicationId: number) {
  //   this.hireBackendService.getApplicationDetail(applicationId)
  //     .subscribe(
  //       (personResponse) => {
  //         if (personResponse.serviceStatus.success) {
  //           let person = personResponse.person;
  //           this.person$.next(person);
  //           // console.log(this.person$.getValue())
  //         } else {
  //           alert("Cannot get the onboarding application. ApplicationId: " + this.applicationId );
  //           this.router.navigate(['/hr/hire']);
  //         }
  //       },
  //       err => console.log("error retrieving person with applicationId.")
  //     )
  // }

  // getPerson(): Observable<Person> {
  //   return this.person$.asObservable();
  // }
}
