import { Component, OnInit } from '@angular/core';
import { ApplicationWorkflowRequest } from '../../../domain/application-workflow-request.model';
import { HireStoreService} from './../../../shared/hire/hire-store.service'
import { HireBackendService} from './../../../shared/hire/hire-backend.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Person } from '../../../../employee/domain/profile/Person.model';

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.css']
})
export class UpdateStatusComponent implements OnInit {
  applicationWorkflowRequest$: Observable<ApplicationWorkflowRequest>;
  applicationWorkflowRequest: ApplicationWorkflowRequest;
  applicationId: number;
  comments = '';
  status = 'pending';

  constructor(
    private hireStoreService: HireStoreService,
    private hireBackendService: HireBackendService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.applicationId = id;
    this.hireStoreService.applicationId = id;
    this.getCurrentApplication();
    this.comments = this.applicationWorkflowRequest.comments;
    this.status = this.applicationWorkflowRequest.status;

    this.route.params
      .subscribe(
        (params: Params) => {
          this.applicationId = +params['id'];
          this.hireStoreService.applicationId = +params['id'];
          this.getCurrentApplication();
          this.comments = this.applicationWorkflowRequest.comments;
          this.status = this.applicationWorkflowRequest.status;
        }
      );
  }

  getCurrentApplication() {
    this.hireStoreService.getApplicationWorkflow(this.applicationId).subscribe(
      response => {
        this.applicationWorkflowRequest = response;
      },
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    );

  }
  
  onUpdate() {
    console.log(this.applicationWorkflowRequest.userId);
    console.log(this.applicationWorkflowRequest.email);
    this.applicationWorkflowRequest.comments = this.comments;
    this.applicationWorkflowRequest.status = this.status;

    this.hireBackendService.updateApplicationStatus(this.applicationWorkflowRequest).subscribe();
    this.router.navigate(['/hr/hire']);
  }

  onViewDetail() {
    const userId = this.applicationWorkflowRequest.userId;
    this.router.navigate(['/employee/'+userId]);
  }

}
