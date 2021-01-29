import { HouseManagementRequest } from './../domain/houseManagementRequest.model';
import { HouseBackendService } from './../house-backend/house-backend.service';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HouseStoreService{
    private houseManagementRequests: BehaviorSubject<HouseManagementRequest[]> = new BehaviorSubject([]);
    
    
    constructor(private houseBackendService: HouseBackendService){this.loadInitialData();}
    

    loadInitialData(){
        this.houseBackendService.getAllHouseManagementResponses().subscribe(
            (data) => {
                if (data.serviceStatus.success){
                    let houseManagementRequests = data.houseManagementRequests.map(houseManagementRequest => {
                        return new HouseManagementRequest(
                            houseManagementRequest.address,
                            houseManagementRequest.landlord,
                            houseManagementRequest.landlordPhone,
                            houseManagementRequest.landlordEmail,
                            houseManagementRequest.numberOfPerson,
                            houseManagementRequest.numberOfBeds,
                            houseManagementRequest.numberOfMattresses,
                            houseManagementRequest.numberOfTables,
                            houseManagementRequest.numberOfChairs,
                            houseManagementRequest.name,
                            houseManagementRequest.phone,
                            houseManagementRequest.email,
                            houseManagementRequest.car
                        );}
                );
                this.houseManagementRequests.next(houseManagementRequests); 
            } 
            },
            err => console.log("error retrieving houses")
        );

    }

    getHouseInfos(){
        return this.houseManagementRequests.asObservable();
    }
}