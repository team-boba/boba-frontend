import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HouseInfo } from './../domain/houseInfo.model';


@Injectable({
    providedIn: 'root'
})
export class HouseBackendService{
    private houseManagementUrl = '/hr/houseManagement';
    constructor(private http: HttpClient){}

    public getAllHouses(): Observable<HouseInfo[]>{
        const url = '/api' + this.houseManagementUrl;
        return this.http.get<HouseInfo[]>(url);
    }


    // public submitHouseInfo(houseInfo: HouseInfo){
    //     const utl = '/api'
    // }
}