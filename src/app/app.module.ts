import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Core/Components/navbar/navbar.component';
import { CarListComponent } from './features/car/car-list/car-list.component';
import { AddCarComponent } from './features/car/add-car/add-car.component';
import { FormsModule } from '@angular/forms';
import { CarModelListComponent } from './features/car-model/car-model-list/car-model-list.component';
import { AddCarModelComponent } from './features/car-model/add-car-model/add-car-model.component';
import{HttpClientModule} from '@angular/common/http';
import { AvaliableCarComponent } from './avaliable-car/avaliable-car.component';
import { AvaliableCarListComponent } from './features/car/avaliable-car-list/avaliable-car-list/avaliable-car-list.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarListComponent,
    AddCarComponent,
    CarModelListComponent,
    AddCarModelComponent,
    AvaliableCarComponent,
    AvaliableCarListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
