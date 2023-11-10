import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddCarPost } from '../models/add-car-post.model';
import { Observable } from 'rxjs';
import { CarModel } from '../models/car-model';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';
import { AvaliableCar } from '../models/avaliable-car';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient, private cookieService: CookieService) 
  {

  }

  addNewCar(data: AddCarPost) : Observable<CarModel>
  {
    return this.http.post<CarModel>(`${environment.apiBaseUrl}/api/Car/Add?addAuth=true`, data);
  }
  getAllCars(): Observable<Car[]>
  {
    return this.http.get<Car[]>(`${environment.apiBaseUrl}/api/Car/AllCars?addAuth=true`);
  }
  getAllAvailableCars(startDate2: Date, endDate2: Date): Observable<Car[]> {
    const params = new HttpParams()
    .set('startDate2', startDate2.toISOString()) // Kodowanie daty jako ISO8601
    .set('endDate2', endDate2.toISOString());
    return this.http.get<Car[]>(`${environment.apiBaseUrl}/api/Car/AvailableCars`, { params });
  }
  // rentCar(car: RentCar): Observable<any> {
  //   const url = `${environment.apiBaseUrl}/api/rent/rentCar`;
  //   return this.http.post(url, null);
  // }
  
  // getAllAvaliableCars(data: AvaliableCar): Observable<Car[]>
  // {
  //   this.http.get<Car[]>(`${environment.apiBaseUrl}/api/Car/AvaliableCars`)
  // }
}
