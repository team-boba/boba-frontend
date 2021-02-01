import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { VisaManagementStoreService } from './../../shared/visa/visa-management-store.service';
import { HrBackendService } from './../../shared/hr-backend.service';
import { VisaManagementBackendService } from './../../shared/visa/visa-management-backend.service';
import { VisaManagementRequest } from './../../domain/visa-management-request.model';
import { HrEmailSendRequest } from './../../domain/hr-email-send-request.model';
import { VisaManagementUploadRequest } from './../../domain/visa-management-upload-request.model';

@Component({
  selector: 'app-visa-status-management',
  styleUrls: ['./visa-status-management.component.css'],
  templateUrl: './visa-status-management.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class VisaStatusManagementComponent {
  visaManagementUploadRequest: VisaManagementUploadRequest = {
    employeeId : 0,
    path : ""
  };

  hrEmailSendRequest: HrEmailSendRequest = {
    email : "",
    subject: "",
    message: ""
  }

  constructor(
    private visaManagementStoreService: VisaManagementStoreService,
    private visaManagementBackendService: VisaManagementBackendService,
    private hrBackendService: HrBackendService
    ) {  }

  
  ngOnInit(): void {
    this.visaManagementStoreService.getVisaManagementRequests()
    .subscribe(data => {
      console.log(data);
      // this.visaManagementRequests = data;
      this.dataSource = data;
    });
  }

  dataSource : VisaManagementRequest[] = [];
  columnsToDisplay = ['full name', 'work authorization', 'expiration date', 'day left', 'action required'];
  expandedElement: VisaManagementRequest | null;

  onSendNotification(userId: number, email: string, nextStep: string) {
    console.log(userId);
    console.log(email);
    console.log(nextStep);
    this.hrEmailSendRequest.email = email;
    this.hrEmailSendRequest.subject = "Notification for OPT Status"
    this.hrEmailSendRequest.message = "Next Step: " + nextStep;
    this.hrBackendService.sendEmailToEmployee(this.hrEmailSendRequest).subscribe();
      alert("Email is sent to employee for notification.")
  }

  onloadingFile(url){
    this.visaManagementUploadRequest.path = url;
  }

  onSaveUploadedFile(employeeId: number) {
    this.visaManagementUploadRequest.employeeId = employeeId;
    this.visaManagementBackendService.uploadOPTFile(this.visaManagementUploadRequest).subscribe();
  }
}
