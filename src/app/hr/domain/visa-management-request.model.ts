import { PersonalDocument } from './../../employee/domain/profile/PersonalDocument.model';

export class VisaManagementRequest {
    public userId: number;
    public firstName: string;
    public lastName: string;
    public middleName: string;
    public email: string;

    public employeeId: number;
    public nextStep: string;
    public action: string;
    public visaStartDate: string;
    public visaEndDate: string;
    public dayLeft: number;
    public personalDocuments: PersonalDocument[];

    constructor(userId: number, firstName: string, lastName: string, middleName: string, email: string, employeeId: number, nextStep: string, action: string, visaStartDate: string, visaEndDate: string, dayLeft: number, personalDocuments: PersonalDocument[]) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.email = email;
        this.employeeId = employeeId;
        this.nextStep = nextStep;
        this.action = action;
        this.visaStartDate = visaStartDate;
        this.visaEndDate = visaEndDate;
        this.dayLeft = dayLeft;
        this.personalDocuments = personalDocuments;
    }
}
