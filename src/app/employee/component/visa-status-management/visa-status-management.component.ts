import { PersonalDocumentRequest } from './../../domain/PersonalDocumentRequest.model';
import { PersonalDocument } from './../../domain/profile/PersonalDocument.model';
import { ConfirmDialogService } from './../../../confirmation-dialog/shared/confirm-dialog/confirm-dialog.service';
import { VisaStatusManagementStoreService } from './../../shared/visa-status-management/visa-status-management-store.service';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { UploadDocumentRequest } from './../../domain/UploadDocumentRequest.model';
import { Employee } from './../../domain/profile/Employee.model';
import { Observable } from 'rxjs';
import { ProfileStoreService } from './../../shared/profile/profile-store.service';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Person } from '../../domain/profile/Person.model';
import { ServiceStatus } from 'src/app/domain/ServiceStatus.model';

@Component({
  selector: 'app-visa-status-management',
  templateUrl: './visa-status-management.component.html',
  styleUrls: ['./visa-status-management.component.css']
})
export class VisaStatusManagementComponent implements OnInit {
  
 
  faFileWord = faFilePdf;
  DocumentsOrder=['OPT STEM EAD','OPT STEM Receipt', 'I-20', 'Signed I-983', 'I-983', 'OPT EAD', 'OPT Receipt'];

  uploadDocumentRequest : UploadDocumentRequest = {
    employeeID : 0,
    path : '',
    title : '',
    comment : '',
    createBy : ''
  };

  uploadResponseStatus$: Observable<ServiceStatus>;
  person$: Observable<Person>;
  isUptodb: boolean = false;
  visaStatus: String = null;
  //---test/
  personaldocuments = [PersonalDocument];
  constructor(
    private route: ActivatedRoute,
    private visaStatusManagementStoreService : VisaStatusManagementStoreService,
    private confirmDialogService : ConfirmDialogService,
    private profileStoreService: ProfileStoreService,
    private router: Router
  ){}

  ngOnInit(){
    this.route.params.subscribe(()=>{
      this.person$ = this.profileStoreService.getPerson();
    });

      let person = this.profileStoreService.person$.value
     
      if(person.employee.visaStatus.visaType !== 'F1(CPT/OPT)'){
        const homeURL = '/employee/' + person.userId;
        alert("Vise Status is not F1(CPT/OPT)")
        this.router.navigate([homeURL]);
      }
      
  }

  validEADDate(visaEndDateStr){
    var visaEndDate = new Date(visaEndDateStr);
    var nowDate = new Date();
    var diff = visaEndDate.getTime() - nowDate.getTime();
    diff = diff/(1000 * 3600 * 24);
    if(diff < 100){
      alert("Your EAD expire within 100 days. Please contact with our HR First");
      return false;
    }
    return true; 
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
    this.uploadDocumentRequest.title = 'OPT Receipt';
    return "NoFind"
  }

  optDocumentFilter(documents){
    var optdocs = []
    for(let i = 0; i < documents.length; i++){
      if(this.DocumentsOrder.indexOf(documents[i].title) > -1){
        var doc = {}
        doc["title"] = documents[i].title;
        doc["comment"] = documents[i].comment;
        doc["path"] = documents[i].path;
        optdocs.push(doc);
      }
    }
    return optdocs;
  }

  onloadingFile(url){
    this.uploadDocumentRequest.path = url;
  }

  onclickSave(employeeFirstname, employeeID){
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

  getFileName(fileUrl: String){
    return fileUrl.substring(fileUrl.lastIndexOf('/') + 1);
  }

  onclickHome(userID){
    const homeURL = '/employee/' + userID;
    this.router.navigate([homeURL]);
  }


}

  

  


