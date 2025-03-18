import { Record } from "./Record";

export class Post extends Record {
  protected override validate(): void {
    console.log("Validating Post");
  }

  protected override beforeSave(): void {
    console.log("Overwritten before save");
  }
}
