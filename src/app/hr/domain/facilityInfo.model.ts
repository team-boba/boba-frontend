import { FacilityReport } from './facilityReport.model';
export class FacilityInfo {
    public type: string;
    public quantity: number;
    public facilityReport: FacilityReport;

    constructor(type: string, quantity: number, facilityReport: FacilityReport){
        this.type = type;
        this.quantity = quantity;
        this.facilityReport = facilityReport;
    }
}