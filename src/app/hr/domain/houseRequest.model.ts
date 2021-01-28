import { HouseInfo } from './houseInfo.model';
import { EmployeeRequest } from './../../employee/domain/EmployeeRequest.model';
import { FacilityInfo } from './facilityInfo.model';

export class HouseRequest{
    public houseInfo: HouseInfo;
    public facilityInfo: FacilityInfo;
    public employeeRequest: EmployeeRequest;
 
}