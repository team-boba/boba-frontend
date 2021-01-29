import { VisaStatusManagementStoreService } from './../../shared/visa-status-management/visa-status-management-store.service';
import { UploadDocumentResponse } from './../../domain/UploadDocumentResponse.model';
import { UploadDocumentRequest } from './../../domain/UploadDocumentRequest.model';
import { Employee } from './../../domain/profile/Employee.model';
import { Observable } from 'rxjs';
import { ProfileStoreService } from './../../shared/profile/profile-store.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { ConfirmDialogService } from './../../../confirmation-dialog/shared/confirm-dialog/confirm-dialog.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Person } from '../../domain/profile/Person.model';
import { VisaStatusManagementBackendService } from '../../shared/visa-status-management/visa-status-management-backend.service';
import { ServiceStatus } from 'src/app/domain/ServiceStatus.model';

@Component({
  selector: 'app-visa-status-management',
  templateUrl: './visa-status-management.component.html',
  styleUrls: ['./visa-status-management.component.css']
})
export class VisaStatusManagementComponent implements OnInit {
  
  uploadDocumentRequest : UploadDocumentRequest = {
    employeeID : 0,
    path : '',
    title : '',
    comment : '',
    createBy : ''
  };
 
  DocumentsOrder=['opt-stem-receipt', 'new-i-20', 'signed-i-983', 'i-983', 'opt-ead', 'opt-receipt'];

  
  uploadResponseStatus$: Observable<ServiceStatus>;
  person$: Observable<Person>;
  constructor(
              private route: ActivatedRoute,
              private visaStatusManagementStoreService : VisaStatusManagementStoreService,
              private profileStoreService: ProfileStoreService,
              private router: Router
              ){}

  ngOnInit() {
    this.route.params.subscribe(()=>{
      this.person$ = this.profileStoreService.getPerson();
    });

    
  }

  findDocumentByOrder(documents){
    var n = this.DocumentsOrder.length
    for(let j = 0; j < n; j++){
        for(let i = 0; i<documents.length; i++){
            if(documents[i].title === this.DocumentsOrder[j]){
              this.uploadDocumentRequest.title =this.DocumentsOrder[j-1];
              return documents[i].title
            }
        } 
    }
    this.uploadDocumentRequest.title = 'opt-receipt';
    return "noFind"
  }

  onloadingFile(url){
    this.uploadDocumentRequest.path = url;
  }

  onclickSave(employeeFirstname, employeeID){
    console.log(this.uploadDocumentRequest.path);
    if(this.uploadDocumentRequest.path !== ''){
      this.uploadDocumentRequest.employeeID = employeeID;
      this.uploadDocumentRequest.createBy = employeeFirstname;
      this.visaStatusManagementStoreService.postloadDocumentRecord(this.uploadDocumentRequest);
      this.uploadResponseStatus$ = this.visaStatusManagementStoreService.getUploadStatus();
    }
    else{
      alert('Plase upload your document first');
    }
  }

  onclickHome(personID){
    const homeURL = '/employee/' + personID
    this.router.navigate([homeURL]);
  }

}

  

  


