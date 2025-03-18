import { Phone } from "../classes/Phone";
import { Tablet } from "../classes/Tablet";

export interface DeviceFactory {
  getPhones(): Phone[];

  getTablets(): Tablet[];

  createPhone(): void;

  createTablet(): void;
}
