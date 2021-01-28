import { Component, OnInit } from '@angular/core';
import { HireStoreService } from './../../shared/hire/hire-store.service';
import { Observable } from 'rxjs';
import { ApplicationWorkflowRequest } from '../../domain/application-workflow-request.model';

@Component({
  selector: 'app-hire-management',
  templateUrl: './hire-management.component.html',
  styleUrls: ['./hire-management.component.css']
})
export class HireManagementComponent implements OnInit {
  applicationWorkflowRequests$: Observable<ApplicationWorkflowRequest[]>;
  comments = '';
  status = '';

  constructor(private hireStoreService: HireStoreService) { }

  ngOnInit(): void {
    this.applicationWorkflowRequests$ = this.hireStoreService.getApplicationWorkflows();
  }
}
