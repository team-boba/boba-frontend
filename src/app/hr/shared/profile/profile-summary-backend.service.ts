import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProfileSummaryRequest } from './../../domain/profile-summary-request.model';
import { ProfileSummaryResponse } from '../../domain/profile-summary-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileSummaryBackendService { 

  constructor(private http: HttpClient) { }

  public getAllProfileSummaries(): Observable<ProfileSummaryResponse> {
    const url = '/api' + '/hr/profile/';
    return this.http.get<ProfileSummaryResponse>(url);
  }
}
