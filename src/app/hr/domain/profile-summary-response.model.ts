import { ServiceStatus } from './../../domain/ServiceStatus.model';
import { ProfileSummaryRequest } from './profile-summary-request.model';

export class ProfileSummaryResponse {
    public serviceStatus: ServiceStatus;
    public profileSummaryRequests: ProfileSummaryRequest[];
}