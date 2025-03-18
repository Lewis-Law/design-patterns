// Composite
import { ITodoList } from "../interfaces/ITodoList";

export class Project implements ITodoList {
  title: string;
  todos: ITodoList[];
  constructor(title: string, todos: ITodoList[]) {
    this.title = title;
    this.todos = todos;
  }

  getHtml(): string {
    let html = `<h1>${this.title}</h1>`;
    if (this.todos.length > 0) {
      html += "<ul>";
      this.todos.forEach((t) => {
        html += `<li>${t.getHtml()}</li>`;
      });
      html += "</ul>";
    }
    return html;
  }
}
