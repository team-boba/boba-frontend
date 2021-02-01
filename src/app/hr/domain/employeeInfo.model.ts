import { isConstructorDeclaration } from "typescript";

export class EmployeeInfo {
    public employeeId: number;
    public name: string;
    public phone: string;
    public email: string;
    public car: string;

    constructor(employeeId: number, name: string, phone: string, email: string, car: string){
        this.employeeId = employeeId;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.car = car;
    }
}



