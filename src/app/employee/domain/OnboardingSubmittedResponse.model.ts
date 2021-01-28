import { ServiceStatus } from './../../domain/ServiceStatus.model';
export class OnboardingSubmittedResponse {
    public serviceStatus: ServiceStatus;
    public userId: number;
}