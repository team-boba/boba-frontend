import { Component, OnInit } from '@angular/core';
import { ConfirmDialogService } from './../confirmation-dialog/shared/confirm-dialog/confirm-dialog.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  faCoffee = faCoffee
  testDocLabel: string = "Test Doc";

  testTitle: string = "I983";
  testDescription: string = "I983 form for OPT";
  testS3FileName: string = "1611711498205-i983.pdf";
  testS3FileUrl: string = "https://beaconfire-team-boba.s3-us-west-1.amazonaws.com/1611711498205-i983.pdf";

  constructor(private confirmDialogService: ConfirmDialogService) { }

  ngOnInit(): void {
  }

  showDialog() {  
    this.confirmDialogService.confirmThis("Discard changes?", function () {  
      alert(true);
    }, function () {  
      alert(false);  
    })  
  }  

  onTestDocUploadedToS3Event(url) {
    console.log(url);
  }

}
