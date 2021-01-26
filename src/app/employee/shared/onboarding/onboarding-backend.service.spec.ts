import { TestBed } from '@angular/core/testing';

import { OnboardingBackendService } from './onboarding-backend.service';

describe('OnboardingBackendService', () => {
  let service: OnboardingBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnboardingBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
