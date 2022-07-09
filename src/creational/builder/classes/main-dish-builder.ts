import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { CompositeMeal } from './composite-meal';
import { Beans, Beverage, Dessert, Meat, Rice } from './meals';

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: CompositeMeal = new CompositeMeal();

  reset(): this {
    this._meal = new CompositeMeal();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const beans = new Beans('Feijão', 10);
    const meat = new Meat('Carne', 15);
    this._meal.add(rice, beans, meat);
    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage('Coca Cola 2l', 7);
    this._meal.add(beverage);
    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert('Pudim', 5);
    this._meal.add(dessert);
    return this;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }

  getMeal(): CompositeMeal {
    return this._meal;
  }
}
