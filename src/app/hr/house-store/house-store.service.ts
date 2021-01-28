import { HouseBackendService } from './../house-backend/house-backend.service';
import { HouseInfo } from './../domain/houseInfo.model';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HouseStoreService{
    private houseInfos: BehaviorSubject<HouseInfo[]> = new BehaviorSubject([]);
    houseInfos$: Array<{address: string, phone: string, numberOfPerson: number}> = [
        {address: 'caf', phone: '123r53', numberOfPerson: 2},
        {address: 'caf', phone: '123r53', numberOfPerson: 2},
        {address: 'caf', phone: '123r53', numberOfPerson: 2},
        {address: 'caf', phone: '123r53', numberOfPerson: 2}
    ];
    
    constructor(private houseBackendService: HouseBackendService){this.loadInitialData();}
    currentHouseInfo: HouseInfo;

    newCurrentHouseInfo(address: string, phone: string, numberOfPerson: number){
        this.currentHouseInfo = new HouseInfo(address, phone, numberOfPerson);
    }

    getCurrentHouseInfo(){
        return this.currentHouseInfo;
    }

    loadInitialData(){
        this.houseBackendService.getAllHouses().subscribe(
            (data) => {
                let houseInfos = data.map(houseInfo => {
                    return new HouseInfo(
                        houseInfo.address,
                        //houseInfo.landlord,
                        houseInfo.phone,
                        houseInfo.numberOfPerson
            
                    );
                });
                this.houseInfos.next(houseInfos);
            },
            err => console.log("error retrieving houses")
        );

    }



    getHouseInfos(){
        return this.houseInfos.asObservable();
    }
}