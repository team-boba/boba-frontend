export class HouseManagementRequest {
    //house
    public id: number;
    public address: string;
    //public landlord: string;
    //public landlordPhone: string;
    //public landlordEmail: string;
    public numberOfPerson: number;

    //facility
    public numberOfBeds: number;
    public numberOfMattresses: number;
    public numberOfTables: number;
    public numberOfChairs: number;

    //facility report
    // public title: string;
    // public date: string;
    // public status: string;
    // public description: string;
    // public createdBy: string;
    
    //employee
    public name: string;
    public phone: string;
    public email: string;
    public car: string;

    constructor(id: number,address: string, numberOfPerson: number, numberOfBeds: number, numberOfMattresses: number, numberOfTables: number, numberOfChairs: number, name: string, phone: string, email: string, car: string) {
            this.id = id;
            this.address = address;
            //this.landlord = landlord;
            //this.landlordPhone = landlordPhone;
            //this.landlordEmail = landlordEmail;
            this.numberOfPerson = numberOfPerson;
            this.numberOfBeds = numberOfBeds;
            this.numberOfMattresses = numberOfMattresses;
            this.numberOfTables = numberOfTables;
            this.numberOfChairs = numberOfChairs;
            this.name = name;
            this.phone = phone;
            this.email = email;
            this.car = car;
        }

}