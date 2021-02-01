import { TestBed } from '@angular/core/testing';

import { HrBackendService } from './hr-backend.service';

describe('HrBackendService', () => {
  let service: HrBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
