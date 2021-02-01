import { HouseBackendService } from './../../house-backend/house-backend.service';
import { HouseManagementRequest } from './../../domain/houseManagementRequest.model';
import { HouseStoreService } from './../../house-store/house-store.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { ConfirmDialogService } from 'src/app/confirmation-dialog/shared/confirm-dialog/confirm-dialog.service';
import { EmployeeInfo } from '../../domain/employeeInfo.model';

@Component({
  selector: 'app-house-management',
  templateUrl: './house-management.component.html',
  styleUrls: ['./house-management.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class HouseManagementComponent implements OnInit {
  //employeeInfos: EmployeeInfo[];
  dataSource: HouseManagementRequest[] = [];
  columnsToDisplay = ['address', 'landlord', 'landlordPhone', 'landlordEmail', 'numberOfPerson'];
  expandedElement: HouseManagementRequest | null;
  //houseManagementRequests$: Observable<HouseManagementRequest[]>;

  constructor(
    private houseStoreService: HouseStoreService
    ) { }

  ngOnInit(): void {
    this.houseStoreService.getHouseInfos().subscribe(data => {
      console.log(data);
      this.dataSource = data;
    });
  }


  toArray(employeeInfos: object){
    let arr = [];
    console.log();
    Object.keys(employeeInfos).map(function(key){
      arr.push({[key]: employeeInfos[key]});
      return arr;
    });
  }


}
