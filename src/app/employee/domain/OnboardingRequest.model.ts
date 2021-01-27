import { EmployeeRequest } from './EmployeeRequest.model';
import { PersonRequest } from './PersonRequest.model';
import { AddressRequest } from './AddressRequest.model';
import { ContactRequest } from './ContactRequest.model';
import { PersonalDocumentRequest } from './PersonalDocumentRequest.model';

export class OnboardingRequest {
    public employeeRequest: EmployeeRequest;
    public personRequest: PersonRequest;
    public addressRequest: AddressRequest;
    public contactRequest: ContactRequest;
    public personalDocumentRequests: PersonalDocumentRequest[]
}