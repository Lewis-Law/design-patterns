import { DeviceFactory } from "../interfaces/DeviceFactory";
import { Galaxy } from "./Galaxy";
import { GalaxyTab } from "./GalaxyTab";
import { Phone } from "./Phone";
import { Tablet } from "./Tablet";

export class SamsungFactory implements DeviceFactory {
  phones: Galaxy[] = [];
  tablets: GalaxyTab[] = [];

  createPhone(): void {
    const phone = new Galaxy("S10", 800, "The all new galaxy S10", true);
    this.phones.push(phone);
  }

  getPhones(): Galaxy[] {
    return this.phones;
  }
  createTablet(): void {
    const tablet = new GalaxyTab("Tab S8", 1000, "A Tablet");
    this.tablets.push(tablet);
  }

  getTablets(): GalaxyTab[] {
    return this.tablets;
  }
}
