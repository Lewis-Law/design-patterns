import { Beverage } from "./Beverage";

export class Decaf implements Beverage {
  public cost(): number {
    return 6;
  }
}
