import { ServiceStatus } from './../../domain/ServiceStatus.model';
import { VisaManagementRequest } from './visa-management-request.model';

export class VisaManagementResponse {
    public serviceStatus: ServiceStatus;
    public visaManagementRequests: VisaManagementRequest[];
}