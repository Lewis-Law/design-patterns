import { IObserver } from "./IObserver";

export interface IObservable {
  add(o: IObserver): void;
  remove(o: IObserver): void;
  notify(): void;
}
