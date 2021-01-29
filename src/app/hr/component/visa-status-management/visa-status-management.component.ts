import { Component, OnInit } from '@angular/core';
import { VisaManagementStoreService } from './../../shared/visa/visa-management-store.service';

@Component({
  selector: 'app-visa-status-management',
  templateUrl: './visa-status-management.component.html',
  styleUrls: ['./visa-status-management.component.css']
})
export class VisaStatusManagementComponent implements OnInit {

  constructor(private visaManagementStoreService: VisaManagementStoreService) { }

  ngOnInit(): void {
  }

}
