export class Light {
  constructor(public id: number) {}
  on() {
    console.log(`Light ${this.id} is on`);
  }
  off() {
    console.log(`Light ${this.id} is off`);
  }
  dim() {
    console.log(`Light ${this.id} is dimmed`);
  }
  bright() {
    console.log(`Light ${this.id} is brighter`);
  }
}
