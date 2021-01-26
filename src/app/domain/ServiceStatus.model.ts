export class ServiceStatus {
    public statusCode: string;
    public success: boolean;
    public errorMessage: string;
  
    constructor(statusCode: string, success: boolean, errorMessage: string) {
      this.statusCode = statusCode;
      this.success = success;
      this.errorMessage = errorMessage;
    }
}
  