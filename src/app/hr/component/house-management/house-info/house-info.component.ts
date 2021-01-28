import { HouseInfo } from './../../../domain/houseInfo.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-house-info',
  templateUrl: './house-info.component.html',
  styleUrls: ['./house-info.component.css']
})
export class HouseInfoComponent implements OnInit {
  houseInfo: Observable<HouseInfo>;

  constructor() { }

  ngOnInit(): void {
  }

}
