import { AnimalFactory } from "../interfaces/AnimalFactory";
import { Animal, AnimalType } from "./Animal";

export class RandomFactory implements AnimalFactory {
  animals: Map<AnimalType, number> = new Map();
  constructor() {
    for (const animal of Object.values(AnimalType)) {
      this.animals.set(animal, 0);
    }
  }

  private randomGenerator(): Animal {
    let randomInt = Math.floor(
      Math.random() * Object.values(AnimalType).length
    );
    const animal = new Animal(Object.values(AnimalType)[randomInt]);
    return animal;
  }

  createAnimal(): Animal {
    const animal = this.randomGenerator();
    this.animals.set(animal.name, (this.animals.get(animal.name) ?? 0) + 1);
    return animal;
  }

  getAnimals() {
    return this.animals;
  }
}
