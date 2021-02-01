import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { VisaManagementStoreService } from './../../shared/visa/visa-management-store.service';
import { VisaManagementBackendService } from './../../shared/visa/visa-management-backend.service';
import { VisaManagementRequest } from './../../domain/visa-management-request.model';
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
  // visaManagementRequests: VisaManagementRequest[];
  visaManagementUploadRequest: VisaManagementUploadRequest = {
    employeeId : 0,
    path : ""
  };

  constructor(
    private visaManagementStoreService: VisaManagementStoreService,
    private visaManagementBackendService: VisaManagementBackendService
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
  }

  onloadingFile(url){
    this.visaManagementUploadRequest.path = url;
  }

  onSaveUploadedFile(employeeId: number) {
    this.visaManagementUploadRequest.employeeId = employeeId;
    this.visaManagementBackendService.uploadOPTFile(this.visaManagementUploadRequest).subscribe();
  }
}
