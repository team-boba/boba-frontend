import { BrowserModule } from '@angular/platform-browser';
import { S3DocUploaderComponent } from './componenet/s3bucket/s3-doc-uploader/s3-doc-uploader.component';
import { S3ImageUploaderComponent } from './componenet/s3bucket/s3-image-uploader/s3-image-uploader.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    S3ImageUploaderComponent,
    S3DocUploaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    S3ImageUploaderComponent,
    S3DocUploaderComponent
  ]
})
export class SharedcomponentsModule { }
