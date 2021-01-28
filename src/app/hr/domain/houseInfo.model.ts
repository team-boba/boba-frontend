export class HouseInfo{
    public address: string;
    //public landlord: string;
    public phone: string;
    public numberOfPerson: number;

    constructor(address: string, phone: string, number: number){
        this.address = address;
        //this.landlord = landlord;
        this.phone = phone;
        this.numberOfPerson = number;
    }

}