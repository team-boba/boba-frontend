import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAddressSectionComponent } from './profile-address-section.component';

describe('ProfileAddressSectionComponent', () => {
  let component: ProfileAddressSectionComponent;
  let fixture: ComponentFixture<ProfileAddressSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAddressSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAddressSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
