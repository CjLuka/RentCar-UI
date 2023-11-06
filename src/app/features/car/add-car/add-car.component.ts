import { Component, OnInit } from '@angular/core';
import { AddCarPost } from '../models/add-car-post.model';
import { CarService } from '../services/car.service';
import { Router } from '@angular/router';
import { CarModelService } from '../../car-model/services/car-model.service';
import { Observable } from 'rxjs';
import { AllCarModels } from '../../car-model/models/allCarModels';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit{
  model: AddCarPost;
  carModels$?: Observable<AllCarModels[]>;

  constructor(private carService: CarService, private router: Router, private carModelService: CarModelService)
  {
    this.model = {
      Year: 0,
      CarModelId: 0,
      //CarModels: []
    }
  }
  ngOnInit(): void {
    this.carModels$ = this.carModelService.getAllCarModelsForNewCar();
  }

  onFormSubmit(): void {
    // Sprawdzenie, czy Year jest liczbą całkowitą
    if (Number.isInteger(this.model.Year)) {
      this.carService.addNewCar(this.model).subscribe({
        next: (response) => {
          this.router.navigateByUrl('/admin/cars');
        }
      });
    } else {
      // Wyświetl komunikat o błędzie, ponieważ Year nie jest liczbą całkowitą
    }
  }
}
