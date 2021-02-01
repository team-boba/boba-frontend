import { TestBed } from '@angular/core/testing';

import { VisaManagementBackendService } from './visa-management-backend.service';

describe('VisaManagementBackendService', () => {
  let service: VisaManagementBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisaManagementBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
