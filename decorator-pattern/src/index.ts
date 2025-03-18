import { Caramel } from "./classes/Caramel";
import { Chocolate } from "./classes/Chocolate";
import { Decaf } from "./classes/Decaf";
import { Espresso } from "./classes/Espresso";

// Base beverage
const espresso = new Espresso();
console.log(`Espresso Cost: $${espresso.cost()}`);

// Espresso with Caramel
const caramelEspresso = new Caramel(espresso);
console.log(`Espresso with Caramel Cost: $${caramelEspresso.cost()}`);

// Espresso with Caramel and Chocolate
const caramelChocolateEspresso = new Chocolate(caramelEspresso);
console.log(
  `Espresso with Caramel & Chocolate Cost: $${caramelChocolateEspresso.cost()}`
);

// Decaf with Chocolate
const chocolateDecaf = new Chocolate(new Decaf());
console.log(`Decaf with Chocolate Cost: $${chocolateDecaf.cost()}`);
