import { Artist } from "./classes/Artist";
import { ArtistResource } from "./classes/ArtistResource";
import { LongForm } from "./classes/LongForm";
import { ShortForm } from "./classes/ShortForm";

const artist = new Artist(
  "Lewis",
  "Law",
  "www.google.com",
  "Software Engineer",
  "www.facebook.com"
);

const aResource = new ArtistResource(artist);

const longForm = new LongForm(aResource);
const shortForm = new ShortForm(aResource);

console.log("Long Form", longForm.Show());
console.log("Short Form", shortForm.Show());
