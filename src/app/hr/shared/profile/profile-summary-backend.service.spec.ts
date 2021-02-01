import { TestBed } from '@angular/core/testing';

import { ProfileSummaryBackendService } from './profile-summary-backend.service';

describe('ProfileSummaryBackendService', () => {
  let service: ProfileSummaryBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileSummaryBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
