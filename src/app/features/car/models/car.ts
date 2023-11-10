import { CarModel } from "../../car-model/models/car-model";
import { carModel } from "../../car-model/models/carModel";

export interface Car
{
  id: number;
  year: number;
  carModelId: number;
  carModel: carModel;
}