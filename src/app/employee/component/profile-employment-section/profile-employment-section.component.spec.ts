import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEmploymentSectionComponent } from './profile-employment-section.component';

describe('ProfileEmploymentSectionComponent', () => {
  let component: ProfileEmploymentSectionComponent;
  let fixture: ComponentFixture<ProfileEmploymentSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEmploymentSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEmploymentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
