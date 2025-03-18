export class Artist {
  constructor(
    private firstName: string,
    private lastName: string,
    private imageUrl: string,
    private description: string,
    private website: string
  ) {}

  bio(): string {
    return this.description;
  }

  image(): string {
    return this.imageUrl;
  }

  fName(): string {
    return this.firstName;
  }

  lName(): string {
    return this.lastName;
  }

  url(): string {
    return this.website;
  }
}
