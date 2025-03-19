import { Item } from "../classes/Item";

export interface IInventoryIterator {
  isDone(): boolean;
  next(): void;
  getCurrentItem(): Item | null;
}
