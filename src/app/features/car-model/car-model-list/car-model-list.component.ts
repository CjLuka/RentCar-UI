import { Component, OnInit } from '@angular/core';
import { CarModelService } from '../services/car-model.service';
import { CarModel } from '../models/car-model';


@Component({
  selector: 'app-car-model-list',
  templateUrl: './car-model-list.component.html',
  styleUrls: ['./car-model-list.component.css']
})
export class CarModelListComponent implements OnInit {

  carModels?: CarModel[];
  constructor(private carModelService: CarModelService){

  }


  ngOnInit(): void {
    this.carModelService.getAllCarModels()
    .subscribe({
      next: (Response) => {
        this.carModels = Response;
      }
    });

  }


}
