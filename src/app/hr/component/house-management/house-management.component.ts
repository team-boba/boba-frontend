import { HouseStoreService } from './../../house-store/house-store.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HouseInfo } from '../../domain/houseInfo.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-house-management',
  templateUrl: './house-management.component.html',
  styleUrls: ['./house-management.component.css']
})
export class HouseManagementComponent implements OnInit {
  houseInfos$: Observable<HouseInfo[]>;
//   houseInfos$: Array<{address: string, landlord: string, phone: string, numberOfPerson: number}> = [
//     {address: 'caf', landlord: 'fsv', phone: '123r53', numberOfPerson: 2},
//     {address: 'caf', landlord: 'fsv', phone: '123r53', numberOfPerson: 2},
//     {address: 'caf', landlord: 'fsv', phone: '123r53', numberOfPerson: 2},
//     {address: 'caf', landlord: 'fsv', phone: '123r53', numberOfPerson: 2}
// ];

  constructor(
    private houseStoreService: HouseStoreService) { }

  ngOnInit(): void {
    this.houseInfos$ = this.houseStoreService.getHouseInfos();
  }

}
