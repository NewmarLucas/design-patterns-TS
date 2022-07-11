import { BicycleFactory } from '../factories/bicycle-factory';
import { CarFactory } from '../factories/car-factory';
import { randomNumbers } from '../utils/randomNumbers';
import { Vehicle } from '../vehicles/vehicle';

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();

  const car1 = carFactory.getVehicle('Celta');
  const car2 = carFactory.getVehicle('Gol');
  const bicycle1 = bicycleFactory.getVehicle('Venzo');
  const bicycle2 = bicycleFactory.getVehicle('GT Max');

  const cars = [car1, car2, bicycle1, bicycle2];

  return cars[randomNumbers(cars.length)];
}
