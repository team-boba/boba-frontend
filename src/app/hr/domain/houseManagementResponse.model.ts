import { ServiceStatus } from "src/app/domain/ServiceStatus.model";
import { HouseManagementRequest } from "./houseManagementRequest.model";

export class HouseManagementResponse{
    public serviceStatus: ServiceStatus;
    public houseManagementRequests: HouseManagementRequest[];
}