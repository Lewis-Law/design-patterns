import { IObserver } from "../interfaces/IObserver";
import { WeatherStation } from "./WeatherStation";

export class PhoneDisplay implements IObserver {
  id: string;
  station: WeatherStation;
  constructor(id: string, station: WeatherStation) {
    this.id = id;
    this.station = station;
  }
  update() {
    const temperature = this.station.getTemperature();

    console.log(`${this.id}: The current temperature is: ${temperature}`);
  }
}
