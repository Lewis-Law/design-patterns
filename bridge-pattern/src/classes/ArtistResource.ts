import { IResource } from "../interfaces/IResource";
import { Artist } from "./Artist";

export class ArtistResource implements IResource {
  artist: Artist;
  constructor(a: Artist) {
    this.artist = a;
  }

  snippet(): string {
    return this.artist.bio();
  }

  image(): string {
    return this.artist.image();
  }

  title(): string {
    return this.artist.fName() + " " + this.artist.lName();
  }

  url(): string {
    return this.artist.url();
  }
}
