import { ConfirmDialogService } from './../confirmation-dialog/shared/confirm-dialog/confirm-dialog.service';
import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {
  faCoffee = faCoffee

  testTitle: string = "I983";
  testDescription: string = "I983 form for OPT";
  testS3FileName: string = "1611711498205-i983.pdf";
  testS3FileUrl: string = "https://beaconfire-team-boba.s3-us-west-1.amazonaws.com/1611711498205-i983.pdf";

  constructor(private confirmDialogService: ConfirmDialogService) { }

  ngOnInit(): void {
  }

  showDialog() {  
    this.confirmDialogService.confirmThis("Are you sure to delete?", function () {  
      return true;
    }, function () {  
      return false;  
    })  
  }  
}
