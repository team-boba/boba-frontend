import { Contact } from './Contact.model';
import { Facility } from './Facitlity.model';
export class House {
    public id: number;
    public contact: Contact;
    public address: string;
    public numberOfPerson: number;
    public facilities: [Facility]
}