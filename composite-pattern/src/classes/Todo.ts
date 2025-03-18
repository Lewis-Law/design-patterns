// Leafs
import { ITodoList } from "../interfaces/ITodoList";

export class Todo implements ITodoList {
  text: string;
  constructor(t: string) {
    this.text = t;
  }

  getHtml(): string {
    return this.text;
  }
}
