interface UserProps {
  // Question mark means these properties are optional. This is important for the set method where we likely only want to update one, not both
  // We can also create a new user with no properties (e.g. a form where a user needs to fill in the properties, we don't want any initial properties)
  name?: string;
  age?: number;
}

export class User {
  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
