import { ServiceStatus } from './../../../domain/ServiceStatus.model';
import { UploadDocumentResponse } from './../../domain/UploadDocumentResponse.model';
import { Injectable } from '@angular/core';
import { VisaStatusManagementBackendService } from './visa-status-management-backend.service';
import { UploadDocumentRequest } from '../../domain/UploadDocumentRequest.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisaStatusManagementStoreService {

  constructor(private vsmBackendService : VisaStatusManagementBackendService) { }

  uploadStatus$: BehaviorSubject<ServiceStatus> = new BehaviorSubject(null);

  getUploadStatus() : Observable<ServiceStatus>{
    return this.uploadStatus$.asObservable();
  }
  

  postloadDocumentRecord(uploadDocumentRequest){
      this.vsmBackendService.getUploadDocumentResponse(uploadDocumentRequest).subscribe((response)=>{
        if(response.serviceStatus.success){
          let status = response.serviceStatus;
          this.uploadStatus$.next(status);
          this.uploadStatus$.getValue()
        }
        
      },error => console.log("error retrieving upload document to database response"))
  }

}

