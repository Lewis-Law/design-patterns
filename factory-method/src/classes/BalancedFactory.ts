import { AnimalFactory } from "../interfaces/AnimalFactory";
import { Animal, AnimalType } from "./Animal";

export class BalancedFactory implements AnimalFactory {
  animals: Map<AnimalType, number> = new Map();
  constructor() {
    for (const animal of Object.values(AnimalType)) {
      this.animals.set(animal, 0);
    }
  }

  private balanceCalculation(): Animal {
    let minCount = Number.MAX_VALUE;
    let animalToCreate: AnimalType = AnimalType.CAT;
    this.animals.forEach((count, animal) => {
      if (minCount > count) {
        minCount = count;
        animalToCreate = animal;
      }
    });
    return new Animal(animalToCreate);
  }

  createAnimal(): Animal {
    const animal = this.balanceCalculation();
    this.animals.set(animal.name, (this.animals.get(animal.name) ?? 0) + 1);
    return animal;
  }

  getAnimals() {
    return this.animals;
  }
}
