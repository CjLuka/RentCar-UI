import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-avaliable-car-list',
  templateUrl: './avaliable-car-list.component.html',
  styleUrls: ['./avaliable-car-list.component.css']
})
export class AvaliableCarListComponent implements OnInit{
  
  avaliableCars$?: Observable<Car[]>;
  constructor(private carServcie: CarService){}

  
  ngOnInit(): void {
    const startDate2: Date = new Date('2023-11-02 15:47:15.8100000');
    const endDate2: Date = new Date('2023-11-02 17:20:49.6566667');

    this.avaliableCars$ = this.carServcie.getAllAvailableCars(startDate2, endDate2);
  }

}
