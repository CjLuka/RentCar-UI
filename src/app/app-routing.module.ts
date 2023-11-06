import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './features/car/car-list/car-list.component';
import { AddCarComponent } from './features/car/add-car/add-car.component';
import { CarModelListComponent } from './features/car-model/car-model-list/car-model-list.component';
import { AddCarModelComponent } from './features/car-model/add-car-model/add-car-model.component';
import { AvaliableCarListComponent } from './features/car/avaliable-car-list/avaliable-car-list/avaliable-car-list.component';

const routes: Routes = [
  {
    path: 'admin/cars',
    component: CarListComponent
  },
  {
    path: 'admin/cars/add',
    component: AddCarComponent
  },
  {
    path: 'admin/carModels',
    component: CarModelListComponent
  },
  {
    path: 'admin/carModels/add',
    component: AddCarModelComponent
  },
  {
    path: 'cars/avaliableCars',
    component: AvaliableCarListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
