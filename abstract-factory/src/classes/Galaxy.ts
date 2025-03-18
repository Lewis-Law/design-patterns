import { Phone } from "./Phone";

export class Galaxy extends Phone {
  camera: boolean;

  constructor(
    name: string,
    cost: number,
    description: string,
    camera: boolean
  ) {
    super(name, cost, description);

    this.camera = camera;
  }
}
