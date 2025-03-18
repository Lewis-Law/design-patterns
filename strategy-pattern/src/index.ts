import { Duck } from "./classes/Duck";
import { SimpleFly, NoFly, FastFly } from "./classes/FlyBehaviours";
import { LoudQuack, SoftQuack, MuteQuack } from "./classes/QuackBehaviours";
import { SimpleDisplay, FancyDisplay } from "./classes/DisplayBehaviours";

// Create multiple ducks with different behaviors
const duckOne = new Duck(
  "Mallard Duck",
  new SimpleFly(),
  new LoudQuack(),
  new FancyDisplay()
);
const duckTwo = new Duck(
  "Rubber Duck",
  new NoFly(),
  new SoftQuack(),
  new SimpleDisplay()
);
const duckThree = new Duck(
  "Rocket Duck",
  new FastFly(),
  new MuteQuack(),
  new FancyDisplay()
);

// Put them into an array for easy iteration
const ducks: Duck[] = [duckOne, duckTwo, duckThree];

// Loop through each duck and display their behaviors
ducks.forEach((duck) => {
  console.log(`\n--- ${duck.name} ---`);
  duck.fly();
  duck.quack();
  duck.display();
});
