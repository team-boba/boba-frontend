import { Component, OnInit } from '@angular/core';
import { ApplicationWorkflowRequest } from '../../../domain/application-workflow-request.model';
import { HireStoreService} from './../../../shared/hire/hire-store.service'
import { HireBackendService} from './../../../shared/hire/hire-backend.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { HrEmailSendRequest } from './../../../domain/hr-email-send-request.model';
import { HrBackendService } from './../../../shared/hr-backend.service';

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

  hrEmailSendRequest: HrEmailSendRequest = {
    email : "",
    subject: "",
    message: ""
  }

  constructor(
    private hireStoreService: HireStoreService,
    private hireBackendService: HireBackendService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private hrBackendService: HrBackendService
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
    console.log(this.status);
    this.applicationWorkflowRequest.comments = this.comments;
    this.applicationWorkflowRequest.status = this.status;

    this.hireBackendService.updateApplicationStatus(this.applicationWorkflowRequest).subscribe();
    alert("Application status has been saved");

    if (this.applicationWorkflowRequest.status==="rejected") {
      this.hrEmailSendRequest.email = this.applicationWorkflowRequest.email;
      this.hrEmailSendRequest.subject = "Rejected Onboarding: Please change your info";
      this.hrEmailSendRequest.message = "Comments from HR: " + this.comments;

      this.hrBackendService.sendEmailToEmployee(this.hrEmailSendRequest).subscribe();
      alert("Email is sent to employee for rejected onboarding.")
    }
    this.router.navigate(['/hr/hire']);
  }

  onViewDetail() {
    const userId = this.applicationWorkflowRequest.userId;
    this.router.navigate(['/employee/'+userId]);
  }

}
