import { TestBed } from '@angular/core/testing';

import { HireBackendService } from './hire-backend.service';

describe('HireBackendService', () => {
  let service: HireBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HireBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
