import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Core/Components/navbar/navbar.component';
import { CarListComponent } from './features/car/car-list/car-list.component';
import { AddCarComponent } from './features/car/add-car/add-car.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarModelListComponent } from './features/car-model/car-model-list/car-model-list.component';
import { AddCarModelComponent } from './features/car-model/add-car-model/add-car-model.component';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AvaliableCarListComponent } from './features/car/avaliable-car-list/avaliable-car-list/avaliable-car-list.component';
import { LoginComponent } from './features/auth/login/login.component'
import { AuthInterceptor } from './Core/interceptors/auth.interceptor';
import { RentCarComponent } from './features/rent/rent-car/rent-car/rent-car.component';
import { MyRentsComponent } from './features/rent/my-rents/my-rents/my-rents.component';
import { StartPageComponent } from './features/startPage/start-page/start-page/start-page.component';
import { RegisterComponent } from './features/auth/register/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarListComponent,
    AddCarComponent,
    CarModelListComponent,
    AddCarModelComponent,
    AvaliableCarListComponent,
    LoginComponent,
    RentCarComponent,
    MyRentsComponent,
    StartPageComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
