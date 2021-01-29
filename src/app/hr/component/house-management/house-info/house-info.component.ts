import { HouseManagementRequest } from './../../../domain/houseManagementRequest.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-house-info',
  templateUrl: './house-info.component.html',
  styleUrls: ['./house-info.component.css']
})
export class HouseInfoComponent implements OnInit {
  HouseManagementRequest: Observable<HouseManagementRequest>;

  constructor() { }

  ngOnInit(): void {
  }

}
