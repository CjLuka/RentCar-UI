import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MyRents } from '../../models/my-rents';
import { RentCarService } from '../../services/rent-car.service';

@Component({
  selector: 'app-my-rents',
  templateUrl: './my-rents.component.html',
  styleUrls: ['./my-rents.component.css']
})
export class MyRentsComponent implements OnInit{

  userId?: string;

  allRents$?: Observable<MyRents[]>;

  constructor(private rentCarService: RentCarService){

  }

  ngOnInit(): void {
    this.userId = localStorage.getItem('user-id')!
    this.allRents$ = this.rentCarService.myRents(this.userId);
  }
}
