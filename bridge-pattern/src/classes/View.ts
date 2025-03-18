import { IResource } from "../interfaces/IResource";

export abstract class View {
  resource: IResource;
  public constructor(r: IResource) {
    this.resource = r;
  }

  public Show(): string {
    return "";
  }
}
