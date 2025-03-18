import { Tablet } from "./Tablet";

export class Ipad extends Tablet {
  batterySize: number;

  constructor(
    name: string,
    cost: number,
    description: string,
    batterySize: number
  ) {
    super(name, cost, description);

    this.batterySize = batterySize;
  }
}
