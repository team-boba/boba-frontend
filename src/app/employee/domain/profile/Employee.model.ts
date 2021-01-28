import { House } from './House.model';
import { ApplicationWorkFlow } from './ApplicationWorkFlow.model';
import { FacilityReportDetail } from './FacilityReportDetail.model';
import { FacilityReport } from './FacilityReport.model';
import { VisaStatus } from './VisaStatus.model';
import { PersonalDocument } from './PersonalDocument.model';
export class Employee {
    public id: number;
    public title: string;
    public startDate: string;
    public endDate: string;
    public avatar: string; 
    public car: string;
    public visaStatus: VisaStatus;
    public visaStartDate: string;
    public visaEndDate: string;
    public driverLicense: string;
    public driverLicenseExpirationDate: string;
    public house: House;
    public personalDocuments: [PersonalDocument];
    public applicationWorkFlow: ApplicationWorkFlow;
    public facilityReports: [FacilityReport];
    public facilityReportDetails: [FacilityReportDetail];
}