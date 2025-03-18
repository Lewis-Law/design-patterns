export abstract class Record {
  public save(): void {
    this.validate();
    this.beforeSave();
    // save to db
    console.log("Record saved to DB");
    this.afterSave();
  }

  protected abstract validate(): void;
  protected beforeSave(): void {
    console.log("Default before save behaviour");
  }
  protected afterSave(): void {
    console.log("Default after save behaviour");
  }
}
