import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDocumentFormComponent } from './personal-document-form.component';

describe('PersonalDocumentFormComponent', () => {
  let component: PersonalDocumentFormComponent;
  let fixture: ComponentFixture<PersonalDocumentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDocumentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDocumentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
