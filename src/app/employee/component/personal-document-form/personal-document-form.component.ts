import { Component, OnInit } from '@angular/core';
import { OnboardingRequest } from './../../domain/OnboardingRequest.model';
import { OnboardingBackendService } from './../../shared/onboarding/onboarding-backend.service';
import { OnboardingStoreService } from './../../shared/onboarding/onboarding-store.service';
import { Router } from '@angular/router';
import { PersonalDocumentRequest } from './../../domain/PersonalDocumentRequest.model'

@Component({
  selector: 'app-personal-document-form',
  templateUrl: './personal-document-form.component.html',
  styleUrls: ['./personal-document-form.component.css']
})
export class PersonalDocumentFormComponent implements OnInit {
  DocLabel1: string = "Please upload a copy of your work authorization";
  DocLabel2: string = "Please upload a copy of your drive license";

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
    private router: Router) { }

  ngOnInit(): void {
  }

  onGetDocPath1(url) {
    this.personDocumentRequest1.path = url;
  }

  onGetDocPath2(url) {
    this.personDocumentRequest2.path = url;
  }

  onSubmit() {
    this.onboardingStoreService.setPersonalDocumentOfCurrentOnboardingRequest([this.personDocumentRequest1, this.personDocumentRequest2]);
    let onboardingRequest: OnboardingRequest = this.onboardingStoreService.getCurrentOnboardingRequest();
    this.onboardingBackendService.submitOnboardingRequest(onboardingRequest).subscribe();

    this.router.navigate(['/employee']);
  }
}
