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
