import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { RentCar } from '../models/rent-car';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MyRents } from '../models/my-rents';

@Injectable({
  providedIn: 'root'
})
export class RentCarService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }


  // rentCar(car: RentCar): Observable<any> {
  //   const url = `${environment.apiBaseUrl}/api/rent/rentCar`;
  //   return this.http.post(url, null);
  // }
  rentCar(data: RentCar): Observable<any>{
    return this.http.post<any>(`${environment.apiBaseUrl}/api/rent/rentCar`, data);
  }
  myRents(data: string): Observable<MyRents[]>
  {
    return this.http.get<MyRents[]>(`${environment.apiBaseUrl}/api/rent/getMyRents?addAuth=true`);
  }
 
}

// getAllCars(): Observable<Car[]>
//   {
//     return this.http.get<Car[]>(`${environment.apiBaseUrl}/api/Car/AllCars?addAuth=true`);
//   }
