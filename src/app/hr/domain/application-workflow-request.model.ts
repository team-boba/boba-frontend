export class ApplicationWorkflowRequest {
    public id: number;
    public createdDate: string;
    public modificationDate: string;
    public status: string;
    public comments: string;
    public type: string;

    public userId: number;
    public firstName: string;
    public lastName: string;
    public middleName: string;
    public email: string;

    constructor(id: number, createdDate: string, modificationDate: string, status: string, comments: string, type: string, userId: number, firstName: string, lastName: string, middleName: string, email: string) {
        this.id = id;
        this.createdDate = createdDate;
        this.modificationDate = modificationDate;
        this.status = status;
        this.comments = comments;
        this.type = type;

        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.email = email;
    }
}
