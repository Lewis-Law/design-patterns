import { View } from "./View";

export class ShortForm extends View {
  public override Show(): string {
    const body = this.resource.title + this.resource.image();

    return body;
  }
}
