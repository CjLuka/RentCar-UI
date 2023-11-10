import { CarModel } from "../../car-model/models/car-model";
import { carModel } from "../../car-model/models/carModel";

export interface MyRents
{
  carModel: carModel;
  dateFrom: Date;
  dateTo: Date;
}