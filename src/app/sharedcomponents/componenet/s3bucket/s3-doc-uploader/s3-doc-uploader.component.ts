import { S3bucketService } from './../../../../shared/s3bucket/s3bucket.service';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-s3-doc-uploader',
  templateUrl: './s3-doc-uploader.component.html',
  styleUrls: ['./s3-doc-uploader.component.css']
})
export class S3DocUploaderComponent implements OnInit {

  docFormData: FormData;
  @Input() docS3Url: string;
  @Input() label: string;
  @Output() docUploadedToS3Event = new EventEmitter();

  constructor(
    private s3bucketService: S3bucketService
  ) { }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    let formData = new FormData();
    let file: File = files.item(0);
    formData.append('file', file);

    this.docFormData = formData;
  }

  async uploadFile() {
    if (!this.docFormData) {
      alert("Not available.");
      return;
    }

    let s3Response = await this.s3bucketService.uploadFile(this.docFormData);
    if (s3Response.serviceStatus.success) {
      this.docS3Url = s3Response.fileUrl;
      this.docUploadedToS3Event.emit(this.docS3Url);
      alert("File uploaded.")
    }
  }

}
