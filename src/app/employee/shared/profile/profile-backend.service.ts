import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonResponse } from '../../domain/profile/PersonResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileBackendService {

  constructor(private http: HttpClient) { }

  public getPersonResponse(userId: number): Observable<PersonResponse> {
    const url = '/api/employee/profile/' + userId;
    return this.http.get<PersonResponse>(url);
  } 
}
