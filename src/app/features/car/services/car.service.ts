import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddCarPost } from '../models/add-car-post.model';
import { Observable } from 'rxjs';
import { CarModel } from '../models/car-model';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';
import { AvaliableCar } from '../models/avaliable-car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) 
  {

  }

  addNewCar(data: AddCarPost) : Observable<CarModel>
  {
    return this.http.post<CarModel>(`${environment.apiBaseUrl}/api/Car/Add`, data);
  }
  getAllCars(): Observable<Car[]>
  {
    return this.http.get<Car[]>(`${environment.apiBaseUrl}/api/Car/AllCars`);
  }
  getAllAvailableCars(dateStart: Date, dateEnd: Date): Observable<Car[]> {
    const params = new HttpParams()
      .set('startDate', dateStart.toString())
      .set('endDate', dateEnd.toString());
    return this.http.get<Car[]>(`${environment.apiBaseUrl}/api/Car/AvailableCars`, { params });
  }
  
  // getAllAvaliableCars(data: AvaliableCar): Observable<Car[]>
  // {
  //   this.http.get<Car[]>(`${environment.apiBaseUrl}/api/Car/AvaliableCars`)
  // }
}
