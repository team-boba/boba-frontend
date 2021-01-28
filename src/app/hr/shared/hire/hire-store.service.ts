import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplicationWorkflowResponse } from './../../domain/application-workflow-response.model';
import { ApplicationWorkflow } from './../../domain/application-workflow.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HireBackendService } from './hire-backend.service';

@Injectable({
  providedIn: 'root'
})
export class HireStoreService {
  private applicationWorkflows: BehaviorSubject<ApplicationWorkflow[]> = new BehaviorSubject([]);

  constructor(private hireBackendService: HireBackendService) {
    this.loadInitialData();
  }

  loadInitialData() {
    this.hireBackendService.getAllApplicationWorkflows()
      .subscribe(
          (data) => {
            console.log(data)

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
}
