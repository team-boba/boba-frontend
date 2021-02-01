import { ServiceStatus } from './../../domain/ServiceStatus.model';
import { UploadDocumentRequest } from './UploadDocumentRequest.model';
export class UploadDocumentResponse {
    public serviceStatus: ServiceStatus;
    public uploadDocumentRequest: UploadDocumentRequest; 
}