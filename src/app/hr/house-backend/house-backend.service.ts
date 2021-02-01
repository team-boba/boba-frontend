import { HouseManagementResponse } from './../domain/houseManagementResponse.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HouseManagementRequest } from '../domain/houseManagementRequest.model';


@Injectable({
    providedIn: 'root'
})
export class HouseBackendService{
    private houseManagementUrl = '/hr/houseManagement';
    HouseManagementResponse: any;
    constructor(private http: HttpClient){}

    public getAllHouseManagementResponses(): Observable<HouseManagementResponse>{
        const url = '/api' + this.houseManagementUrl;
        return this.http.get<HouseManagementResponse>(url);
    }
}
