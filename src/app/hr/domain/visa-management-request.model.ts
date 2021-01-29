import { PersonalDocument } from './../../employee/domain/profile/PersonalDocument.model';

export class VisaManagementRequest {
    public userId: number;
    public firstName: string;
    public lastName: string;
    public middleName: string;
    public email: string;

    public employeeId: number;
    public visaType: string;
    public visaStartDate: string;
    public visaEndDate: string;
    public personalDocuments: PersonalDocument[];

    constructor(userId: number, firstName: string, lastName: string, middleName: string, email: string, employeeId: number, visaType: string, visaStartDate: string, visaEndDate: string, personalDocuments: PersonalDocument[]) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.email = email;
        this.employeeId = employeeId;
        this.visaType = visaType;
        this.visaStartDate = visaStartDate;
        this.visaEndDate = visaEndDate;
        this.personalDocuments = personalDocuments;
    }
}
