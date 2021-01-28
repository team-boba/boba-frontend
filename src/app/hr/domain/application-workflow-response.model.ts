import { ServiceStatus } from './../../domain/ServiceStatus.model';
import { ApplicationWorkflow } from './application-workflow.model';

export class ApplicationWorkflowResponse {
    public serviceStatus: ServiceStatus;
    public applicationWorkflows: ApplicationWorkflow[];
}
