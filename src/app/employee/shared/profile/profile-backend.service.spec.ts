import { TestBed } from '@angular/core/testing';

import { ProfileBackendService } from './profile-backend.service';

describe('ProfileBackendService', () => {
  let service: ProfileBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
