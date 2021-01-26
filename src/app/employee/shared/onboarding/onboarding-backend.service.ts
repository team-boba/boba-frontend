import { OnboardingRequest } from './../../domain/OnboardingRequest.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OnboardingBackendService {

  constructor(private http: HttpClient) { }

  submitOnboardingRequest(onboardingRequest: OnboardingRequest) {
    const url = '/employee/onboarding/submit';
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    // return this.http.post(url, onboardingRequest, {headers});
    return this.http.post(url, onboardingRequest, {headers});
  }
}
