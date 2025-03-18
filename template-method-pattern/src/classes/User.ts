import { Record } from "./Record";

export class User extends Record {
  username: string;
  constructor(u: string) {
    super();
    this.username = u;
  }

  protected override validate(): void {
    console.log("Validating User");
  }
}
