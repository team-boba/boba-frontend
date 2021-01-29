import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileContactinfoSectionComponent } from './profile-contactinfo-section.component';

describe('ProfileContactinfoSectionComponent', () => {
  let component: ProfileContactinfoSectionComponent;
  let fixture: ComponentFixture<ProfileContactinfoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileContactinfoSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileContactinfoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
