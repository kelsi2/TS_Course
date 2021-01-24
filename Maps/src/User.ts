import { Mappable } from './CustomMap';
import faker from "faker";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    // Since we declared location to return an obj above it needs to return one here as well or it will return undefined
    this.location = {
      // Need to convert these from strings to numbers since the library returns strings for these values
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`
  }
}