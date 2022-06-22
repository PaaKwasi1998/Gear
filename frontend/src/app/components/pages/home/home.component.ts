import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GearService } from 'src/app/services/gear.service';
import { Gear } from 'src/app/shared/models/gear';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gears:Gear[] = [];
  constructor(private gearservice:GearService,  activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) =>{
      if(params.searchTerm)
      this.gears = this.gearservice.getAllGearsBySearchTerm(params.searchTerm);
      else
      this.gears = gearservice.getAll();
    })


   }

  ngOnInit(): void {
  }

}
