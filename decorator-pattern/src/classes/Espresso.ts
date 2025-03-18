import { Beverage } from "./Beverage";

export class Espresso implements Beverage {
  public cost(): number {
    return 5;
  }
}
