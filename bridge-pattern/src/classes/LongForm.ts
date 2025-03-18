import { View } from "./View";

export class LongForm extends View {
  public override Show(): string {
    const body =
      this.resource.snippet() +
      this.resource.title() +
      this.resource.image() +
      this.resource.url();

    return body;
  }
}
