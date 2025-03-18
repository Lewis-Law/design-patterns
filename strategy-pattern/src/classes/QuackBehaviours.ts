import { IQuackBehaviour } from "../interfaces/IQuackBehaviour";

export class LoudQuack implements IQuackBehaviour {
  quack(): void {
    console.log("QUACK! QUACK! (Loud)");
  }
}

export class SoftQuack implements IQuackBehaviour {
  quack(): void {
    console.log("Quack... (Soft)");
  }
}

export class MuteQuack implements IQuackBehaviour {
  quack(): void {
    console.log("...");
  }
}
