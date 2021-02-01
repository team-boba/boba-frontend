import { TestBed } from '@angular/core/testing';

import { ProfileSummaryStoreService } from './profile-summary-store.service';

describe('ProfileSummaryStoreService', () => {
  let service: ProfileSummaryStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileSummaryStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
