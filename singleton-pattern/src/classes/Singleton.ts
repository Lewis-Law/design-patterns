export class Singleton {
  private static instance: Singleton;
  private constructor() {}

  public static getInstance(): Singleton {
    if (this.instance == null) {
      this.instance = new Singleton();
    }
    return this.instance;
  }

  public helloWorld(): void {
    console.log("Hello world");
  }

  // Other functions here...
}
