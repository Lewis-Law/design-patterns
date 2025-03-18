import { AddonDecorator } from "./AddonDecorator";
import { Beverage } from "./Beverage";

export class Chocolate extends AddonDecorator {
  beverage: Beverage;

  constructor(b: Beverage) {
    super();
    this.beverage = b;
  }

  public cost(): number {
    return this.beverage.cost() + 1;
  }
}
