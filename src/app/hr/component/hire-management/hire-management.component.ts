import { Component, OnInit } from '@angular/core';
import { HireStoreService } from './../../shared/hire/hire-store.service';
import { Observable } from 'rxjs';
import { ApplicationWorkflow } from './../../domain/application-workflow.model';

@Component({
  selector: 'app-hire-management',
  templateUrl: './hire-management.component.html',
  styleUrls: ['./hire-management.component.css']
})
export class HireManagementComponent implements OnInit {
  applicationWorkflows$: Observable<ApplicationWorkflow[]>;
  comments = '';
  status = '';

  constructor(private hireStoreService: HireStoreService) { }

  ngOnInit(): void {
    this.applicationWorkflows$ = this.hireStoreService.getApplicationWorkflows();
  }
}
