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
