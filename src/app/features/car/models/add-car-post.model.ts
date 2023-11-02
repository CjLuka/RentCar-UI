import { CarModel } from "../../car-model/models/car-model";

export interface AddCarPost{
  Year: number;
  CarModels: CarModel[];
  CarModelId: number;
}