import { HouseManagementRequest } from './../../domain/houseManagementRequest.model';
import { HouseStoreService } from './../../house-store/house-store.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-house-management',
  templateUrl: './house-management.component.html',
  styleUrls: ['./house-management.component.css']
})
export class HouseManagementComponent implements OnInit {
  houseManagementRequests$: Observable<HouseManagementRequest[]>;
//   houseInfos$: Array<{address: string, landlord: string, phone: string, numberOfPerson: number}> = [
//     {address: 'caf', landlord: 'fsv', phone: '123r53', numberOfPerson: 2},
//     {address: 'caf', landlord: 'fsv', phone: '123r53', numberOfPerson: 2},
//     {address: 'caf', landlord: 'fsv', phone: '123r53', numberOfPerson: 2},
//     {address: 'caf', landlord: 'fsv', phone: '123r53', numberOfPerson: 2}
// ];

  constructor(
    private houseStoreService: HouseStoreService) { }

  ngOnInit(): void {
    this.houseManagementRequests$ = this.houseStoreService.getHouseInfos();
  }

}
