import { TestBed } from '@angular/core/testing';

import { HireStoreService } from './hire-store.service';

describe('HireStoreService', () => {
  let service: HireStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HireStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
