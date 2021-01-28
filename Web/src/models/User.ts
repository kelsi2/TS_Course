import { Attributes } from "./Attributes";
import { Sync } from "./Sync";
import { Eventing } from "./Eventing";

const rootUrl = "http://localhost:3000/users";

export interface UserProps {
  // Question mark means these properties are optional. This is important for the set method where we likely only want to update one, not both
  // We can also create a new user with no properties (e.g. a form where a user needs to fill in the properties, we don't want any initial properties)
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

  // This will call the on method from the eventing file, we don't need to define any of the code here that is already defined there
  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }
}
