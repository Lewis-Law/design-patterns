import { IFlyBehaviour } from "../interfaces/IFlyBehaviour";

export class SimpleFly implements IFlyBehaviour {
  fly(): void {
    console.log("Flying at a normal speed.");
  }
}

export class FastFly implements IFlyBehaviour {
  fly(): void {
    console.log("Flying at high speed!");
  }
}

export class NoFly implements IFlyBehaviour {
  fly(): void {
    console.log("I can't fly.");
  }
}
