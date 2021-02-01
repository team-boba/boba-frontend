import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProfileSummaryResponse } from './../../domain/profile-summary-response.model';
import { ProfileSummaryRequest } from '../../domain/profile-summary-request.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProfileSummaryBackendService } from './profile-summary-backend.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileSummaryStoreService {
  private profileSummaryRequests: BehaviorSubject<ProfileSummaryRequest[]> = new BehaviorSubject([]); 
  
  constructor(
    private profileSummaryBackendService: ProfileSummaryBackendService,
    private router: Router) {
    this.loadInitialData();
  }

  loadInitialData() {
    this.profileSummaryBackendService.getAllProfileSummaries()
      .subscribe(
          (data) => {

            if (data.serviceStatus.success) {
              let profileSummaryRequests = data.profileSummaryRequests.map(profileSummaryRequest => {
                return new ProfileSummaryRequest(
                  profileSummaryRequest.personId,
                  profileSummaryRequest.employeeId,
                  profileSummaryRequest.userId,
                  profileSummaryRequest.firstName,
                  profileSummaryRequest.lastName,
                  profileSummaryRequest.middleName,
                  profileSummaryRequest.ssn,
                  profileSummaryRequest.startDate,
                  profileSummaryRequest.visaType
                );
              });

              this.profileSummaryRequests.next(profileSummaryRequests);
            }
          },
          err => console.log("Error retrieving applicationWorkflows")
      );
  }

  getProfileSummaryRequests() {
    return this.profileSummaryRequests.asObservable();
  }
}
