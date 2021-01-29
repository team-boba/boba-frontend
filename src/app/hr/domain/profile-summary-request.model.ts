export class ProfileSummaryRequest {
    public personId: number;
    public employeeId: number;
    public userId: number;
    public firstName: string;
    public lastName: string;
    public middleName: string;
    public ssn: string;
    public startDate: string;
    public visaType: string;

    constructor(personId: number, employeeId: number, userId: number, firstName: string, lastName: string, middleName: string, ssn: string, startDate: string, visaType: string) {
        this.personId = personId;
        this.employeeId = employeeId;
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.ssn = ssn;
        this.startDate = startDate;
        this.visaType = visaType;
    }
}
