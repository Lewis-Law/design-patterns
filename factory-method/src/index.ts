import { Animal, AnimalType } from "./classes/Animal";
import { BalancedFactory } from "./classes/BalancedFactory";
import { RandomFactory } from "./classes/RandomFactory";

const balancedFactory = new BalancedFactory();

for (let i = 0; i < 10; i++) {
  balancedFactory.createAnimal();
  console.log("Balanced Factory:", balancedFactory.getAnimals());
}

const randomFactory = new RandomFactory();

for (let i = 0; i < 10; i++) {
  randomFactory.createAnimal();
  console.log("Random Factory:", randomFactory.getAnimals());
}
