/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VisaStatusService } from './visa-status.service';

describe('Service: VisaStatus', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisaStatusService]
    });
  });

  it('should ...', inject([VisaStatusService], (service: VisaStatusService) => {
    expect(service).toBeTruthy();
  }));
});
