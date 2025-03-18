import { PhoneDisplay } from "./classes/PhoneDisplay";
import { WeatherStation } from "./classes/WeatherStation";
import { WindowDisplay } from "./classes/WindowDisplay";

const weatherStation = new WeatherStation();
const phoneOne = new PhoneDisplay("p1", weatherStation);
const phoneTwo = new PhoneDisplay("p2", weatherStation);
const windowOne = new WindowDisplay("w1", weatherStation);

weatherStation.add(phoneOne);
weatherStation.add(phoneTwo);
weatherStation.add(windowOne);

weatherStation.notify();
