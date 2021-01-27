import { Facility } from './Facitlity.model';
export class House {
    public id: number;
    public address: string;
    public numberOfPerson: number;
    public facilities: [Facility]
}