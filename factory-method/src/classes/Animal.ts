export enum AnimalType {
  CAT = "CAT",
  DOG = "DOG",
  SHEEP = "SHEEP",
}
export class Animal {
  name: AnimalType;

  constructor(name: AnimalType) {
    this.name = name;
  }
}
