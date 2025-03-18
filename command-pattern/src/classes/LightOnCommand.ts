import { ICommand } from "../interfaces/ICommand";
import { Light } from "./Light";

export class LightOnCommand implements ICommand {
  light: Light;
  public constructor(l: Light) {
    this.light = l;
  }

  public execute(): void {
    this.light.on();
  }

  public unexecute(): void {
    this.light.off();
  }
}
