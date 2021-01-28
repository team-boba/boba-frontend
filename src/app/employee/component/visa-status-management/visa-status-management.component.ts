import { VisaStatusService } from './../../shared/visa-status/visa-status.service';
import { ConfirmDialogService } from './../../../confirmation-dialog/shared/confirm-dialog/confirm-dialog.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visa-status-management',
  templateUrl: './visa-status-management.component.html',
  styleUrls: ['./visa-status-management.component.css']
})
export class VisaStatusManagementComponent implements OnInit {
  
  uploadFileUrl = "";
  
  singnedI983= "1611806726895-ethantests3file.pdf";
  singnedI983URL = "https://s3.us-west-1.amazonaws.com/beaconfire-team-boba/1611806726895-ethantests3file.pdf"
 
  status="signed-i-983";

  constructor(private route : ActivatedRoute,
              private confirmDialogService : ConfirmDialogService,
              private visaStatusService: VisaStatusService
              ){}

  ngOnInit() {
    // this.status = this.route.snapshot.paramMap.get('visaStatus');
  }

  showDialogUpdateVisaStatus() {  
    this.confirmDialogService.confirmThis("Save changes?", function () {  
      alert(true);
      // this.visaStatusService
    }, function () {  
      alert(false);  
    })  
  }  

  clickSave(){
      this.showDialogUpdateVisaStatus();
  }

  getUploadFile(url){
    this.uploadFileUrl = url;
  }
  



}
