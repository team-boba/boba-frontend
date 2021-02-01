import { EmployeeInfo } from './employeeInfo.model';
export class HouseManagementRequest {
    // house
    public houseId: number;
    public address: string;
    // public landlord: string;
    // public landlordPhone: string;
    // public landlordEmail: string;
    public numberOfPerson: number;

    // facility
    public numberOfBeds: number;
    public numberOfMattresses: number;
    public numberOfTables: number;
    public numberOfChairs: number;

    // facility report
    // public title: string;
    // public date: string;
    // public status: string;
    // public description: string;
    // public createdBy: string;

    // employee
    // public name: string;
    // public phone: string;
    // public email: string;
    // public car: string;
    public employeeInfos: EmployeeInfo[];

    constructor(houseId: number, address: string, numberOfPerson: number, numberOfBeds: number,
                numberOfMattresses: number, numberOfTables: number, numberOfChairs: number, employeeInfos: EmployeeInfo[]) {
            this.houseId = houseId;
            this.address = address;
            // this.landlord = landlord;
            // this.landlordPhone = landlordPhone;
            // this.landlordEmail = landlordEmail;
            this.numberOfPerson = numberOfPerson;
            this.numberOfBeds = numberOfBeds;
            this.numberOfMattresses = numberOfMattresses;
            this.numberOfTables = numberOfTables;
            this.numberOfChairs = numberOfChairs;
            this.employeeInfos = employeeInfos;
        }

}
