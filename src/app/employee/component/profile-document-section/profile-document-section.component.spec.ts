import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDocumentSectionComponent } from './profile-document-section.component';

describe('ProfileDocumentSectionComponent', () => {
  let component: ProfileDocumentSectionComponent;
  let fixture: ComponentFixture<ProfileDocumentSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDocumentSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDocumentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
