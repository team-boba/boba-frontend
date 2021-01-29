import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileNameSectionComponent } from './profile-name-section.component';

describe('ProfileNameSectionComponent', () => {
  let component: ProfileNameSectionComponent;
  let fixture: ComponentFixture<ProfileNameSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileNameSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileNameSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
