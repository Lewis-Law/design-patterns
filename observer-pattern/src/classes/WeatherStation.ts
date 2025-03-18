import { IObservable } from "../interfaces/IObservable";
import { IObserver } from "../interfaces/IObserver";

export class WeatherStation implements IObservable {
  private observers: Set<IObserver> = new Set();
  private temperature: number;

  constructor() {
    this.temperature = Math.random() * 100;
  }

  add(o: IObserver) {
    this.observers.add(o);
  }

  remove(o: IObserver) {
    this.observers.delete(o);
  }

  notify() {
    this.observers.forEach((o) => {
      o.update();
    });
  }

  getTemperature(): number {
    return this.temperature;
  }
}
