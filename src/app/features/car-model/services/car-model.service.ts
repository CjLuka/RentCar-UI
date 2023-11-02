import { Injectable } from '@angular/core';
import { AddCarModelRequest } from '../models/add-car-model-request.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CarModel } from '../models/car-model';

@Injectable({
  providedIn: 'root'
})
export class CarModelService {

  constructor(private http: HttpClient) { }

  addCarModel(model: AddCarModelRequest): Observable<void>
  {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/CarModel/AddCarModel`, model);
  }

  getAllCarModels(): Observable<CarModel[]>
  {
    return this.http.get<CarModel[]>(`${environment.apiBaseUrl}/api/CarModel/AllCarModels`);
  }
}
