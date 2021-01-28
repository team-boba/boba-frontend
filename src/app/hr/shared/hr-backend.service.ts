import { HrRegisterTokenRequest } from './../domain/HrRegisterTokenRequest.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HrBackendService {

  constructor(
    private http: HttpClient
  ) { }

  generateRegistrationToken(hrRegisterTokenRequest: HrRegisterTokenRequest): Observable<any>  {
    const url = '/2api/hr/generateToken';
    return this.http.post(url, hrRegisterTokenRequest);
  }
}
