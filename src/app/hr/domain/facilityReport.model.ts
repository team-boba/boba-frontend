export class FacilityReport {
    public title: string;
    public date: string;
    public employee: string;
    public description: string;
    public status: string;

    constructor(title: string, date: string, employee: string, description: string, status: string){
        this.title = title;
        this.date = date;
        this.employee = employee;
        this.description = description;
        this.status = status;
    }

}