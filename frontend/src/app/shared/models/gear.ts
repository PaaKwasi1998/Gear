export class Gear{  /* A class is created with its members*/ 
  id!:string;             /* ! indicates that the member/field is required */ 
  name!:string;
  price!:number;          /* ? indicates that the member/field is optional */ 
  tags?: string[];
  favorite!:boolean;
  stars!: number;
  imageUrl!: string;
  

}
