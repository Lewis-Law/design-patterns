import { IObserver } from "../interfaces/IObserver";
import { WeatherStation } from "./WeatherStation";

export class WindowDisplay implements IObserver {
  id: string;
  station: WeatherStation;
  constructor(id: string, station: WeatherStation) {
    this.id = id;
    this.station = station;
  }
  update() {
    const temperature = this.station.getTemperature();

    console.log(`${this.id}: ${temperature} is the current temperature.`);
  }
}
