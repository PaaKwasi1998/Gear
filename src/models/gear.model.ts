import {Schema, model} from 'mongoose';

export interface Gear{
    id:string;
    name:string;
    price:number;
    tags: string[];
    favorite:boolean;
    stars: number;
    imageUrl: string;
    origins: string[];
    cookTime:string;
}

export const FoodSchema = new Schema<Gear>(
    {
        name: {type: String, required:true},
        price: {type: Number, required:true},
        
        
        stars: {type: Number, required:true},
        imageUrl: {type: String, required:true},

       
    },{
        toJSON:{
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps:true
    }
);

export const GearModel = model<Gear>('gear', FoodSchema);