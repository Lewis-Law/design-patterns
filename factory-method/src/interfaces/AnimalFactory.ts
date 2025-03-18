import { Animal, AnimalType } from "../classes/Animal";

export interface AnimalFactory {
  animals: Map<AnimalType, number>;
  createAnimal(): Animal;
  getAnimals(): Map<AnimalType, number>;
}
