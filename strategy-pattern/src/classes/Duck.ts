import { IDisplayBehaviour } from "../interfaces/IDisplayBehaviour";
import { IFlyBehaviour } from "../interfaces/IFlyBehaviour";
import { IQuackBehaviour } from "../interfaces/IQuackBehaviour";

export class Duck {
  name: string;
  fb: IFlyBehaviour;
  qb: IQuackBehaviour;
  db: IDisplayBehaviour;

  constructor(
    name: string,
    fb: IFlyBehaviour,
    qb: IQuackBehaviour,
    db: IDisplayBehaviour
  ) {
    console.log("Duck constructor called", name, fb);
    this.name = name;
    this.fb = fb;
    this.qb = qb;
    this.db = db;
  }

  public fly(): void {
    this.fb.fly();
  }

  public quack(): void {
    this.qb.quack();
  }

  public display(): void {
    this.db.display();
  }
}
