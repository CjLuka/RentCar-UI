import { CarModel } from "../../car-model/models/car-model";
import { carModel } from "../../car-model/models/carModel";

export interface Car
{
  year: number;
  carModelId: number;
  carModel: carModel;
}