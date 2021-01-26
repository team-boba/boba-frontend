import { S3Response } from './../../domain/S3Response.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class S3bucketService {

  constructor(private http: HttpClient) { }

  async uploadFile(formData: FormData) {
    const url = '/bucket/upload'
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return await this.http.post<S3Response>(url, formData, {headers}).toPromise();
  }
}
