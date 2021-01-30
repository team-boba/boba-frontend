import { Component, OnInit } from '@angular/core';
import { OnboardingRequest } from './../../domain/OnboardingRequest.model';
import { OnboardingBackendService } from './../../shared/onboarding/onboarding-backend.service';
import { OnboardingStoreService } from './../../shared/onboarding/onboarding-store.service';
import { Router } from '@angular/router';
import { PersonalDocumentRequest } from './../../domain/PersonalDocumentRequest.model'
import { Location } from '@angular/common';
import { ProfileStoreService } from '../../shared/profile/profile-store.service';
import { ProfileBackendService } from '../../shared/profile/profile-backend.service';

@Component({
  selector: 'app-personal-document-form',
  templateUrl: './personal-document-form.component.html',
  styleUrls: ['./personal-document-form.component.css']
})
export class PersonalDocumentFormComponent implements OnInit {
  DocLabel1: string = "Please upload a copy of your work authorization";
  DocLabel2: string = "Please upload a copy of your drive license";

  returnDocUrl1: string = null;
  returnDocUrl2: string = null;
  returnUserId: number = null;

  personDocumentRequest1: PersonalDocumentRequest = {
    title: 'work authorization',
    path: ''
  };

  personDocumentRequest2: PersonalDocumentRequest = {
    title: 'drive license',
    path: ''
  };

  constructor(
    private onboardingBackendService: OnboardingBackendService,
    private onboardingStoreService: OnboardingStoreService,
    private router: Router,
    private location: Location,
    private profileStoreService: ProfileStoreService,
    private profileBackendService: ProfileBackendService
  ) { }

  ngOnInit(): void {
    let person = this.profileStoreService.person$.getValue();
    if (person != null) { 
      this.returnUserId = person.userId;
      this.returnDocUrl1 = person.employee.personalDocuments.find(pd=>pd.title==='work authorization').path;
      this.returnDocUrl2 = person.employee.personalDocuments.find(pd=>pd.title==='drive license').path;

      this.personDocumentRequest1.path = this.returnDocUrl1;
      this.personDocumentRequest2.path = this.returnDocUrl2;
    }
  }

  onGetDocPath1(url) {
    this.personDocumentRequest1.path = url;
  }

  onGetDocPath2(url) {
    this.personDocumentRequest2.path = url;
  }

  back() {
    this.location.back();
  }

  async onSubmit() {
    if (this.returnUserId) {
      let person = this.profileStoreService.person$.getValue();

      person.employee.personalDocuments.find(pd=>pd.title==='work authorization').path = this.personDocumentRequest1.path;
      person.employee.personalDocuments.find(pd=>pd.title==='drive license').path = this.personDocumentRequest2.path;
      await this.profileBackendService.updatePersonalDocumentsRequest(this.returnUserId
        ,{'personalDocumentRequests': [this.personDocumentRequest1, this.personDocumentRequest2]});

      this.location.back();
    } else {
      this.onboardingStoreService.setPersonalDocumentOfCurrentOnboardingRequest([this.personDocumentRequest1, this.personDocumentRequest2]);
      let onboardingRequest: OnboardingRequest = this.onboardingStoreService.getCurrentOnboardingRequest();
      let onboardingSubmittedResponse = await this.onboardingBackendService.submitOnboardingRequest(onboardingRequest);
      if (onboardingSubmittedResponse.serviceStatus.success) {
        alert("Onboarding application successfully submitted!");
        window.location.href = '/employee/'+onboardingSubmittedResponse.userId;
      } else {
        alert("Onboarding application failed, start new application.");
        this.router.navigate(['/employee/person-form']);
      }
    }
  }
}
