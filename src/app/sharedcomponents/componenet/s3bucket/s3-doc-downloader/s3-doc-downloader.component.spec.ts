import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S3DocDownloaderComponent } from './s3-doc-downloader.component';

describe('S3DocDownloaderComponent', () => {
  let component: S3DocDownloaderComponent;
  let fixture: ComponentFixture<S3DocDownloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S3DocDownloaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(S3DocDownloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
