import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Car } from 'src/app/features/car/models/car';
import { CarService } from 'src/app/features/car/services/car.service';
import { Observable } from 'rxjs';
import { RentCar } from '../../models/rent-car';
import { RentCarService } from '../../services/rent-car.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/features/auth/services/auth.service';

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent implements OnInit {
  searchForm: FormGroup;
  avaliableCars$?: Observable<Car[]>;
  model: RentCar;

  constructor(private formBuilder: FormBuilder, private carService: CarService, private rentCarService: RentCarService, private router: Router, private authService: AuthService) {
    this.searchForm = this.formBuilder.group({
      dateFrom: '2003-11-08T08:16:55.8610000',
      dateTo: '2003-11-08T08:16:55.8610000',
      carId: 0,
      userId: localStorage.getItem('user-id')
    });
    this.model = {
      carId: 0,
      dateFrom: new Date(),
      dateTo: new Date(),
      userAppId: localStorage.getItem('user-id')!
    };
  }

  ngOnInit(): void {
    this.searchForm.valueChanges.subscribe((formValues) => {
      const dateFrom = new Date(formValues.dateFrom);
      const dateTo = new Date(formValues.dateTo);
      this.avaliableCars$ = this.carService.getAllAvailableCars(dateFrom, dateTo);
      //this.model.userId = localStorage.getItem('user-id')!
    });
  }

  onFormSubmit(): void {
    this.model = this.searchForm.value;
    stringToGuid(localStorage.getItem('user-id')!);
    this.model.userAppId = stringToGuid(localStorage.getItem('user-id')!);
    //this.model.userId = localStorage.getItem('user-id')!
    console.log(this.model);
    this.rentCarService.rentCar(this.model).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/');
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}

function stringToGuid(guidString: string) {
  // Usuń wszystkie znaki "-".
  guidString = guidString.replace(/-/g, '');

  // Upewnij się, że ciąg ma dokładnie 32 znaki.
  if (guidString.length !== 32) {
    throw new Error('Nieprawidłowy format GUID.');
  }

  // Utwórz GUID w formacie "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".
  return `${guidString.substr(0, 8)}-${guidString.substr(8, 4)}-${guidString.substr(12, 4)}-${guidString.substr(16, 4)}-${guidString.substr(20)}`;
}