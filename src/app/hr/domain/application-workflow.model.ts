export class ApplicationWorkflow {
    public id: number;
    public createdDate: string;
    public modificationDate: string;
    public status: string;
    public comments: string;
    public type: string;

    constructor(id: number, createdDate: string, modificationDate: string, status: string, comments: string, type: string) {
        this.id = id;
        this.createdDate = createdDate;
        this.modificationDate = modificationDate;
        this.status = status;
        this.comments = comments;
        this.type = type;
    }
}
