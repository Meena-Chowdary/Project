import { Seller } from './Seller';
import { SubCategory } from './subCategory';
import { Discount } from './discount';

export class NewItem{
    public newItemId:number;
    public itemName:string;
    public description:string;
    public stock:number;
    public sellingPrice:number;
    public seller:Seller;
    public subCategory:SubCategory;
    public discount:Discount;
}