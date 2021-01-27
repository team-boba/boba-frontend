import { S3Response } from './../../domain/S3Response.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


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

  downloadFile(fileName: string): Observable<any> {
    const url = '/bucket/download';
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const options = { responseType: 'blob' as 'json', headers:headers }
    return this.http.post<BlobPart>(url, {'fileName': fileName}, options).pipe(
      map(data => {
        const a = document.createElement('a');
        document.body.appendChild(a);
        const blob: any = new Blob([data], {type: 'octet/stream'});
        const fakeUrl = window.URL.createObjectURL(blob);
        a.href = fakeUrl;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(fakeUrl);
      })
    );
  }

}
