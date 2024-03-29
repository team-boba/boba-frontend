import { Component, OnInit } from '@angular/core';
import { ConfirmDialogService } from '../../shared/confirm-dialog/confirm-dialog.service';  

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  message: any;  
    constructor(  
        private confirmDialogService: ConfirmDialogService  
    ) { }  

  ngOnInit(): void {
    /** 
        *   This function waits for a message from alert service, it gets 
        *   triggered when we call this from any other component 
        */  
       this.confirmDialogService.getMessage().subscribe(message => {  
        this.message = message;  
    });
  }

}
