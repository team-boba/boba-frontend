import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visa-status-management',
  templateUrl: './visa-status-management.component.html',
  styleUrls: ['./visa-status-management.component.css']
})
export class VisaStatusManagementComponent implements OnInit {
  
  uploadFileUrl = "https://s3.us-west-1.amazonaws.com/beaconfire-team-boba/1611805266280-ethantests3file.pdf";
  
  singnedI983= "1611806726895-ethantests3file.pdf";
  singnedI983URL = "https://s3.us-west-1.amazonaws.com/beaconfire-team-boba/1611806726895-ethantests3file.pdf"
 
  status="signed-i-983";

  constructor(private route : ActivatedRoute){}

  ngOnInit() {
    // this.status = this.route.snapshot.paramMap.get('visaStatus');
  }


  getUploadFile(url){
    console.log(url);
  }
  



}
