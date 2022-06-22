import { Injectable } from '@angular/core';
import { sample_gears } from 'src/data';
import { Gear } from '../shared/models/gear';


@Injectable({
  providedIn: 'root'
})
export class GearService {

  constructor() { }

  getAll():Gear[]{
    return sample_gears;
  }

  getAllGearsBySearchTerm(searchTerm:string){
    return this.getAll().filter(gears => gears.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllGearsById(GearId: string):Gear{
    return this.getAll().find(gears => gears.id == GearId)?? new Gear();
  }
}
