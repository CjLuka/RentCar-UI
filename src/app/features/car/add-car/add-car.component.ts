import { Component } from '@angular/core';
import { AddCarPost } from '../models/add-car-post.model';
import { CarService } from '../services/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  model: AddCarPost;
  carModels: string[] = [];

  constructor(private carService: CarService, private router: Router)
  {
    this.model = {
      Year: 2000,
      CarModelId: 1,
      CarModels: []
    }
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
