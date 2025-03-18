import { DeviceFactory } from "../interfaces/DeviceFactory";
import { Ipad } from "./Ipad";
import { Iphone } from "./Iphone";

export class AppleFactory implements DeviceFactory {
  phones: Iphone[] = [];
  tablets: Ipad[] = [];

  createPhone(): void {
    const phone = new Iphone("10", 800, "The all new iPhone 10");
    this.phones.push(phone);
  }

  getPhones(): Iphone[] {
    return this.phones;
  }
  createTablet(): void {
    const tablet = new Ipad("iPad Air", 1000, "A light tablet", 900);
    this.tablets.push(tablet);
  }

  getTablets(): Ipad[] {
    return this.tablets;
  }
}
