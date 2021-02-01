import { TestBed } from '@angular/core/testing';

import { VisaStatusManagementStoreService } from './visa-status-management-store.service';

describe('VisaStatusManagementStoreService', () => {
  let service: VisaStatusManagementStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisaStatusManagementStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
