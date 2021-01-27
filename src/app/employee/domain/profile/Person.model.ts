import { Address } from './Address.model';
import { Contact } from './Contact.model';
import { Employee } from './Employee.model';

export class Person {
    public id: number;
    public firstName: string;
    public lastName: string;
    public middelName: string;
    public email: string;
    public cellphone: string;
    public alternatePhone: string;
    public gender: string;
    public userId: number;
    public contacts: [Contact];
    public address: Address;
    public employee: Employee;
    public ssn: string;
    public dob: string;
    
} 