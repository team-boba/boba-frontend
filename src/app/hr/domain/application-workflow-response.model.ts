import { ServiceStatus } from './../../domain/ServiceStatus.model';
import { ApplicationWorkflowRequest } from './application-workflow-request.model';

export class ApplicationWorkflowResponse {
    public serviceStatus: ServiceStatus;
    public applicationWorkflowRequests: ApplicationWorkflowRequest[];
}
