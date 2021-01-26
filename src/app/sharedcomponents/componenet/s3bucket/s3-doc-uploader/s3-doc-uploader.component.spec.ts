import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S3DocUploaderComponent } from './s3-doc-uploader.component';

describe('S3DocUploaderComponent', () => {
  let component: S3DocUploaderComponent;
  let fixture: ComponentFixture<S3DocUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ S3DocUploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(S3DocUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
