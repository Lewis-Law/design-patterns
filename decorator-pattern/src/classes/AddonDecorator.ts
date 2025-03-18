import { Beverage } from "./Beverage";

export abstract class AddonDecorator implements Beverage {
  public abstract cost(): number;
}
