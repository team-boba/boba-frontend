import { S3bucketService } from './../../../../shared/s3bucket/s3bucket.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-s3-image-uploader',
  templateUrl: './s3-image-uploader.component.html',
  styleUrls: ['./s3-image-uploader.component.css']
})
export class S3ImageUploaderComponent implements OnInit {
  imageFormData: FormData;
  @Input() imageS3Url: string;
  @Input() label: string;
  @Output() imageUploadedToS3Event = new EventEmitter();

  constructor(
    private s3bucketService: S3bucketService
  ) { }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    let formData = new FormData();
    let file: File = files.item(0);
    formData.append('file', file);

    this.imageFormData = formData;
  }

  async uploadFile() {
    if (!this.imageFormData) {
      alert("Not available.");
      return;
    }

    let s3Response = await this.s3bucketService.uploadFile(this.imageFormData);
    if (s3Response.serviceStatus.success) {
      this.imageS3Url = s3Response.fileUrl;
      this.imageUploadedToS3Event.emit(this.imageS3Url);
      alert("File uploaded.")
    }
  }

}
