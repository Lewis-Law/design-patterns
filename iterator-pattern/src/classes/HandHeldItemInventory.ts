import { IInventoryIterator } from "../interfaces/IInventoryIterator";
import { IItemInventory } from "../interfaces/IItemInventory";
import { HandheldItemInventoryIterator } from "./HandHeldItemInventoryIterator";
import { Item } from "./Item";

export class HandheldItemInventory implements IItemInventory {
  public right: Item;
  public left: Item;

  constructor(right: Item, left: Item) {
    this.right = right;
    this.left = left;
  }

  public getIterator(): IInventoryIterator {
    return new HandheldItemInventoryIterator(this);
  }
}
