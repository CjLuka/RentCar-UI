import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; 
import { Observable, Subscription, subscribeOn } from 'rxjs';
import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';
import { ReactiveFormsModule } from '@angular/forms'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-avaliable-car-list',
  templateUrl: './avaliable-car-list.component.html',
  styleUrls: ['./avaliable-car-list.component.css'],
})
export class AvaliableCarListComponent implements OnInit {
  avaliableCars$?: Observable<Car[]>;
  searchForm: FormGroup; 
  // model: RentCar;
  // routeSubscription?: Subscription;


  constructor(private carService: CarService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
    // this.model = {
    //   carId: 1,
    //   dateFrom: new Date("2003-11-08 08:16:55.8610000"), 
    //   dateTo: new Date("2003-12-08 08:16:55.8610000")   
    // }
    this.searchForm = this.formBuilder.group({
      startDate: '2003-11-08 08:16:55.8610000',
      endDate: '2003-11-08 08:16:55.8610000',
    });
  }

  ngOnInit(): void {
    this.searchForm.valueChanges.subscribe((formValues) => {
      const startDate = new Date(formValues.startDate);
      const endDate = new Date(formValues.endDate);
      this.avaliableCars$ = this.carService.getAllAvailableCars(startDate, endDate);
    });
  }

  // rentCar(car: RentCar): void {
  //   this.carService.rentCar(this.model);
  //   this.routeSubscription = this.route.paramMap.subscribe({

  //   })
  //   //.subscribe ((Response) => {
  //     // // Pobierz wartości z formularza
  //     // const startDateControl = this.searchForm.get('startDate');
  //     // const endDateControl = this.searchForm.get('endDate');
  //     // console.log(this.model)
  //     // //const startDate = this.searchForm.get('startDate').value;
  //     // //const endDate = this.searchForm.get('endDate').value;

  //     // if (startDateControl && endDateControl) {
  //     //   const startDate = startDateControl.value;
  //     //   const endDate = endDateControl.value;
      
  //     //   // Przypisz wartości do modelu i wykonaj inne operacje
  //     //   //this.model.carId = car.carId;
  //     //   this.model.dateFrom = startDate;
  //     //   this.model.dateTo = endDate;
  //     // } else {
  //     //   console.error("Brak kontrolki formularza.");
  //     // }
  //     // // Przypisz wartości do modelu
  //     // // this.model.carId = car.carId;
  //     // // this.model.dateFrom = startDate;
  //     // // this.model.dateTo = endDate;
  //     console.log('Wypozyczono samochod')
  //   //});
  // }
}