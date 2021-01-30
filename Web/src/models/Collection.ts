import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

// We can pass in a second generic type just like function args (we can use as many as we need), T === User, K === UserProps
export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((value: K) => {
        // Can't use T here since this is a reference to an actual class not a type definition
        // const user = User.buildUser(value);
        // Deserialize will return a json collection of UserProps
        this.models.push(this.deserialize(value));
      });

      this.trigger("change");
    });
  }
}
