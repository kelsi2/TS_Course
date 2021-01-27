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

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
