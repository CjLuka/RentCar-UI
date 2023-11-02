// import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Car } from '../models/car';
// import { CarService } from '../services/car.service';

import { Observable } from "rxjs/internal/Observable";
import { Car } from "../models/car";
import { Component, OnInit } from "@angular/core";
import { CarService } from "../services/car.service";
import { CarModelService } from "../../car-model/services/car-model.service";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit{
  
  allCars$?: Observable<Car[]>;
  
  constructor(private carService: CarService, private carModelService: CarModelService){
  }
  
  ngOnInit(): void 
  {
    this.allCars$ = this.carService.getAllCars();
  }

}

