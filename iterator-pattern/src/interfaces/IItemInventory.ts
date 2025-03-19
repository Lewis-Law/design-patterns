import { IInventoryIterator } from "./IInventoryIterator";

export interface IItemInventory {
  getIterator(): IInventoryIterator;
}
