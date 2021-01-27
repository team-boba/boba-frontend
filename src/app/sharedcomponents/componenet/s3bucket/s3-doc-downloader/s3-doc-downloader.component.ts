import { S3bucketService } from './../../../../shared/s3bucket/s3bucket.service';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-s3-doc-downloader',
  templateUrl: './s3-doc-downloader.component.html',
  styleUrls: ['./s3-doc-downloader.component.css']
})
export class S3DocDownloaderComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() s3FileName: string;
  @Input() s3FileUrl: string;

  constructor(
    private s3bucketService: S3bucketService
  ) { }

  ngOnInit(): void {
    
  }

  downloadFile() {
    this.s3bucketService.downloadFile(this.s3FileName).subscribe();
  }
}
