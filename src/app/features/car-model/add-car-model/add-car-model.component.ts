import { Component, OnDestroy } from '@angular/core';
import { AddCarModelRequest } from '../models/add-car-model-request.model';
import { CarModelService } from '../services/car-model.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car-model',
  templateUrl: './add-car-model.component.html',
  styleUrls: ['./add-car-model.component.css']
})
export class AddCarModelComponent implements OnDestroy {

  model: AddCarModelRequest;
  private addCarModelSubscription?: Subscription

  constructor(private carModelService: CarModelService, private router: Router){
    this.model = {
      brandName: '',
      modelName: ''
    }
  }
  

  onFormSubmit(){
    this.addCarModelSubscription = this.carModelService.addCarModel(this.model)
    .subscribe({
      next: (Response) => {
        this.router.navigateByUrl('/admin/carModels')
      }
    })
  }
  ngOnDestroy(): void {
    this.addCarModelSubscription?.unsubscribe();
  }
}
