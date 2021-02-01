/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VisaStatusManagementService } from './visa-status-management.service';

describe('Service: VisaStatusManagement', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisaStatusManagementService]
    });
  });

  it('should ...', inject([VisaStatusManagementService], (service: VisaStatusManagementService) => {
    expect(service).toBeTruthy();
  }));
});
