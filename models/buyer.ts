import { User } from './user';
import {Address} from './address';

export class Buyer extends User{
    public firstName:string;
    public lastName:string;
    public emailId:string;
    public mobileNumber:string;
    public address:Address;
}
