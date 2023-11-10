import { Injectable } from '@angular/core';
import { AddCarModelRequest } from '../models/add-car-model-request.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CarModel } from '../models/car-model';
import { AllCarModels } from '../models/allCarModels';

@Injectable({
  providedIn: 'root'
})
export class CarModelService {

  constructor(private http: HttpClient) { }

  addCarModel(model: AddCarModelRequest): Observable<void>
  {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/CarModel/AddCarModel?addAuth=true`, model);
  }

  getAllCarModels(): Observable<CarModel[]>
  {
    return this.http.get<CarModel[]>(`${environment.apiBaseUrl}/api/CarModel/AllCarModels?addAuth=true`);
  }
  getAllCarModelsForNewCar(): Observable<AllCarModels[]>{
    return this.http.get<AllCarModels[]>(`${environment.apiBaseUrl}/api/CarModel/AllCarModels`);
  }
}
