import { ICommand } from "../interfaces/ICommand";
import { Light } from "./Light";

export class LightOffCommand implements ICommand {
  light: Light;
  public constructor(l: Light) {
    this.light = l;
  }

  public execute(): void {
    this.light.off();
  }

  public unexecute(): void {
    this.light.on();
  }
}
