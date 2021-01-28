import { OnboardingSubmittedResponse } from './../../domain/OnboardingSubmittedResponse.model';
import { OnboardingRequest } from './../../domain/OnboardingRequest.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OnboardingBackendService {
  private onboardingUrl = '/employee/onboarding';  

  constructor(private http: HttpClient) { }

  async submitOnboardingRequest(onboardingRequest: OnboardingRequest) {
    const url = '/api' + this.onboardingUrl + '/submit';
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return await this.http.post<OnboardingSubmittedResponse>(url, onboardingRequest, {headers}).toPromise();
  }
}
