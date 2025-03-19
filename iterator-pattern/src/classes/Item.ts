export class Item {
  private _item: string | null = null;
  constructor(i: string | null) {
    this._item = i;
  }

  public get item(): string | null {
    return this._item;
  }
  public set item(i: string | null) {
    this._item = i;
  }
}
