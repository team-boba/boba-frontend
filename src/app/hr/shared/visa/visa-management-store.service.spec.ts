import { TestBed } from '@angular/core/testing';

import { VisaManagementStoreService } from './visa-management-store.service';

describe('VisaManagementStoreService', () => {
  let service: VisaManagementStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisaManagementStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
