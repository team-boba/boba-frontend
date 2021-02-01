import { SerializeUser } from './SerializeUser.model';
import { ServiceStatus } from './../../domain/ServiceStatus.model';
export class SerializeUserResponse {
    public serviceStatus: ServiceStatus;
    public serializeUser: SerializeUser;
}