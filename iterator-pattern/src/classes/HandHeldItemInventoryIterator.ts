import { IInventoryIterator } from "../interfaces/IInventoryIterator";
import { HandheldItemInventory } from "./HandHeldItemInventory";
import { Item } from "./Item";

export class HandheldItemInventoryIterator implements IInventoryIterator {
  inventory: HandheldItemInventory;
  index: number = 0;
  constructor(i: HandheldItemInventory) {
    this.inventory = i;
  }
  isDone(): boolean {
    return this.index >= 2;
  }

  next(): void {
    this.index += 1;
  }

  getCurrentItem(): Item | null {
    switch (this.index) {
      case 0:
        return this.inventory.right;
      case 1:
        return this.inventory.left;
      default:
        return null;
    }
  }
}
