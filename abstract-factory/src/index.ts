import { AppleFactory } from "./classes/AppleFactory";
import { SamsungFactory } from "./classes/SamsungFactory";

const sFactory = new SamsungFactory();
const aFactory = new AppleFactory();

sFactory.createPhone();
sFactory.createPhone();
sFactory.createTablet();
sFactory.createPhone();
sFactory.createTablet();
const sPhones = sFactory.getPhones();
const sTablets = sFactory.getTablets();
console.log(sPhones);
console.log(sTablets);

aFactory.createPhone();
aFactory.createPhone();
aFactory.createTablet();
const aPhones = aFactory.getPhones();
const aTablets = aFactory.getTablets();
console.log(aPhones);
console.log(aTablets);
