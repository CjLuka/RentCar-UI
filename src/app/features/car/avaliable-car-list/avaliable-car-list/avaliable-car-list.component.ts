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
    const dateStart: Date = new Date('2023-11-01');
    const dateEnd: Date = new Date('2023-11-15');


    this.avaliableCars$ = this.carServcie.getAllAvailableCars(dateStart, dateEnd);
  }

}
