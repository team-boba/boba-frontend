import { EmployeeInfo } from './employeeInfo.model';
export class HouseManagementRequest {
    public houseId: number;
    public address: string;

    public numberOfPerson: number;

    public numberOfBeds: number;
    public numberOfMattresses: number;
    public numberOfTables: number;
    public numberOfChairs: number;

    public employeeInfos: EmployeeInfo[];

    constructor(houseId: number, address: string, numberOfPerson: number, numberOfBeds: number,
                numberOfMattresses: number, numberOfTables: number, numberOfChairs: number, employeeInfos: EmployeeInfo[]) {
            this.houseId = houseId;
            this.address = address;
            this.numberOfPerson = numberOfPerson;
            this.numberOfBeds = numberOfBeds;
            this.numberOfMattresses = numberOfMattresses;
            this.numberOfTables = numberOfTables;
            this.numberOfChairs = numberOfChairs;
            this.employeeInfos = employeeInfos;
        }

}
