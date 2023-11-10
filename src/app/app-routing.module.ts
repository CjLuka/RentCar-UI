import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './features/car/car-list/car-list.component';
import { AddCarComponent } from './features/car/add-car/add-car.component';
import { CarModelListComponent } from './features/car-model/car-model-list/car-model-list.component';
import { AddCarModelComponent } from './features/car-model/add-car-model/add-car-model.component';
import { AvaliableCarListComponent } from './features/car/avaliable-car-list/avaliable-car-list/avaliable-car-list.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RentCarComponent } from './features/rent/rent-car/rent-car/rent-car.component';
import { MyRentsComponent } from './features/rent/my-rents/my-rents/my-rents.component';
import { StartPageComponent } from './features/startPage/start-page/start-page/start-page.component';
import { RegisterComponent } from './features/auth/register/register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
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
  },
  {
    path: 'rent/rentCar',
    component: RentCarComponent
  },
  {
    path: 'rent/myRents',
    component: MyRentsComponent
  },
  {
    path: 'startPage/start-page',
    component: StartPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
