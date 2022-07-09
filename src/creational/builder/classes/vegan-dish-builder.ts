import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { CompositeMeal } from './composite-meal';
import { Beans, Rice } from './meals';

export class VeganDishBuilder implements MealBuilderProtocol {
  private _meal: CompositeMeal = new CompositeMeal();

  reset(): this {
    this._meal = new CompositeMeal();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const beans = new Beans('Feijão', 10);
    this._meal.add(rice, beans);
    return this;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }

  getMeal(): CompositeMeal {
    return this._meal;
  }
}
