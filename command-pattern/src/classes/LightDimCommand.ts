import { ICommand } from "../interfaces/ICommand";
import { Light } from "./Light";

export class LightDimCommand implements ICommand {
  light: Light;
  public constructor(l: Light) {
    this.light = l;
  }

  public execute(): void {
    this.light.dim();
  }

  public unexecute(): void {
    this.light.bright();
  }
}
