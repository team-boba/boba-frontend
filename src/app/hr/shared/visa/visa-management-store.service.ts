import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VisaManagementRequest } from './../../domain/visa-management-request.model';
import { VisaManagementResponse } from '../../domain/visa-management-response.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { VisaManagementBackendService } from './visa-management-backend.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VisaManagementStoreService {
  private visaManagementRequests: BehaviorSubject<VisaManagementRequest[]> = new BehaviorSubject([]); 

  constructor(
    private visaManagementBackendService: VisaManagementBackendService,
    private router: Router) {
    this.loadInitialData();
  }

  loadInitialData() {
    this.visaManagementBackendService.getAllVisaInfo()
      .subscribe(
          (data) => {
            // console.log(data);
            if (data.serviceStatus.success) {
              let visaManagementRequests = data.visaManagementRequests.map(visaManagementRequest => {
                return new VisaManagementRequest(
                  visaManagementRequest.userId,
                  visaManagementRequest.firstName,
                  visaManagementRequest.lastName,
                  visaManagementRequest.middleName,
                  visaManagementRequest.email,
                  visaManagementRequest.employeeId,
                  visaManagementRequest.nextStep,
                  visaManagementRequest.action,
                  visaManagementRequest.visaStartDate,
                  visaManagementRequest.visaEndDate,
                  visaManagementRequest.dayLeft,
                  visaManagementRequest.personalDocuments
                );
              });

              this.visaManagementRequests.next(visaManagementRequests);
            }
          },
          err => console.log("Error retrieving applicationWorkflows")
      );
  }

  getVisaManagementRequests() {
    return this.visaManagementRequests.asObservable();
  }
}
