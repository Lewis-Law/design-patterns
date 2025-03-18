import { ICommand } from "../interfaces/ICommand";
import { Light } from "./Light";

export class LightBrightCommand implements ICommand {
  light: Light;
  public constructor(l: Light) {
    this.light = l;
  }

  public execute(): void {
    this.light.bright();
  }

  public unexecute(): void {
    this.light.dim();
  }
}
