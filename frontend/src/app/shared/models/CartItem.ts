import { Gear } from "./gear";

export class CartItem{

  constructor(public gear: Gear){}
  
  quantity: number = 1;
  price : number = this.gear.price;
}
