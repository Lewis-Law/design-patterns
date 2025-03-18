import { IDisplayBehaviour } from "../interfaces/IDisplayBehaviour";

export class SimpleDisplay implements IDisplayBehaviour {
  display(): void {
    console.log("I'm a simple-looking duck.");
  }
}

export class FancyDisplay implements IDisplayBehaviour {
  display(): void {
    console.log("I'm a fancy-looking duck with bright feathers!");
  }
}
