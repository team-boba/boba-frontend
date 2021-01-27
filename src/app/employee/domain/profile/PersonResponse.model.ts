import { Person } from './Person.model';
import { ServiceStatus } from '../../../domain/ServiceStatus.model';
export class PersonResponse {
    public serviceStatus: ServiceStatus;
    public person: Person; 
}