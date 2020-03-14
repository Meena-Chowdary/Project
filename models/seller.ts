import { Address } from './address';
import { User } from './user';

export class Seller extends User{
    public userId:number;
    public firstName:string;
    public lastName:string;
    public companyName:string;
    public companyDescription:string;
    public address:Address;
    public website:string;
    public emailId:string;
    public phone:string;
}
