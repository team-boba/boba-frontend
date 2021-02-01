import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UploadDocumentRequest } from '../../domain/UploadDocumentRequest.model';
import { UploadDocumentResponse } from '../../domain/UploadDocumentResponse.model';


@Injectable({
  providedIn: 'root'
})
export class VisaStatusManagementBackendService {
  constructor(private http : HttpClient) { }

  public getUploadDocumentResponse(uploadDocumentRequest: UploadDocumentRequest): Observable<UploadDocumentResponse>{
    const url = '/api/vsm/uploadDocument'
    return this.http.post<UploadDocumentResponse>(url, uploadDocumentRequest);
  }
}
