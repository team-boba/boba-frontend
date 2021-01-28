import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplicationWorkflowResponse } from './../../domain/application-workflow-response.model';
import { ApplicationWorkflow } from './../../domain/application-workflow.model';
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
  private applicationWorkflows: BehaviorSubject<ApplicationWorkflow[]> = new BehaviorSubject([]); // all the application flows
  
  applicationId: number;
  person$: BehaviorSubject<Person> = new BehaviorSubject(null); // application details

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
            // console.log(data)

            if (data.serviceStatus.success) {
              let applicationWorkflows = data.applicationWorkflows.map(applicationWorkflow => {
                return new ApplicationWorkflow(
                  applicationWorkflow.id,
                  applicationWorkflow.createdDate,
                  applicationWorkflow.modificationDate,
                  applicationWorkflow.status,
                  applicationWorkflow.comments,
                  applicationWorkflow.type
                );
              });

              this.applicationWorkflows.next(applicationWorkflows);
            }
          },
          err => console.log("Error retrieving applicationWorkflows")
      );
  }

  getApplicationWorkflows() {
    return this.applicationWorkflows.asObservable();
  }

  // getApplicationWorkflow(id: number) {
  //   this.applicationWorkflows.subscribe
  //   const crisis = this.applicationWorkflows.find(
  //     (s) => {
  //       return s.id === id;
  //     }
  //   );
  //   return crisis;
  // }
  // getApplicationWorkflow(id: number): Observable<ApplicationWorkflow> {
  //   return this.applicationWorkflows
  //     .pipe(
  //       filter((item: ApplicationWorkflow) => item.id === id)
  //     )
  // }

  // getApplicationWorkflow(id: number): Observable<ApplicationWorkflow> {
  //   return this.applicationWorkflows.pipe(
  //     map(items => items.find(item => item.id === id)),
  //   );
  // }

  // get application detail
  loadPerson(applicationId: number) {
    this.hireBackendService.getApplicationDetail(applicationId)
      .subscribe(
        (personResponse) => {
          if (personResponse.serviceStatus.success) {
            let person = personResponse.person;
            this.person$.next(person);
            console.log(this.person$.getValue())
          } else {
            alert("Cannot get the onboarding application. ApplicationId: " + this.applicationId );
            this.router.navigate(['/hr/hire']);
          }
        },
        err => console.log("error retrieving person with applicationId.")
      )
  }

  getPerson(): Observable<Person> {
    return this.person$.asObservable();
  }
}
