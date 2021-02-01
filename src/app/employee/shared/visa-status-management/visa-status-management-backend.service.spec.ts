/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VisaStatusManagementBackendService } from './visa-status-management-backend.service';

describe('Service: VisaStatusManagementBackend', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisaStatusManagementBackendService]
    });
  });

  it('should ...', inject([VisaStatusManagementBackendService], (service: VisaStatusManagementBackendService) => {
    expect(service).toBeTruthy();
  }));
});
