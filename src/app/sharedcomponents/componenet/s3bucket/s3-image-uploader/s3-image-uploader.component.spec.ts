import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S3ImageUploaderComponent } from './s3-image-uploader.component';

describe('S3ImageUploaderComponent', () => {
  let component: S3ImageUploaderComponent;
  let fixture: ComponentFixture<S3ImageUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S3ImageUploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(S3ImageUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
