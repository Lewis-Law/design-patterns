import { HandheldItemInventory } from "./classes/HandHeldItemInventory";
import { Item } from "./classes/Item";

const leftHandItem = new Item("Left Hand Item");
const rightHandItem = new Item("Right Hand Item");
const inventory = new HandheldItemInventory(rightHandItem, leftHandItem);

const inventoryIterator = inventory.getIterator();
while (!inventoryIterator.isDone()) {
  const item = inventoryIterator.getCurrentItem();
  console.log(item?.item);
  inventoryIterator.next();
}
