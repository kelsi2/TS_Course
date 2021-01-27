import axios, { AxiosResponse } from "axios";

const baseURL = "http://localhost:3000/users";

interface UserProps {
  // Question mark means these properties are optional. This is important for the set method where we likely only want to update one, not both
  // We can also create a new user with no properties (e.g. a form where a user needs to fill in the properties, we don't want any initial properties)
  id?: number;
  name?: string;
  age?: number;
}

// Function type is indicated as () => void as long as no args or return are needed
// Creating a type alias to make this cleaner
type Callback = () => void;

export class User {
  // Type annotation for our events object (we don't know what the values are yet but we know the types so we declare that here for the on method below)
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  // We need to support multiple listeners with the appropriate callback functions
  // When the event is called we will run all of the callbacks in the callback array (if any)
  on(eventName: string, callback: Callback): void {
    // this.events[eventName] => Callback[] or undefined (when user is first called this will be undefined but events will be added)

    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  }

  fetch(): void {
    axios
      .get(`${baseURL}/${this.get("id")}`)
      .then((res: AxiosResponse): void => {
        this.set(res.data);
      });
  }

  save(): void {
    const id = this.get("id");

    if (id) {
      axios.put(`${baseURL}/${id}`, this.data);
    } else {
      axios.post(`${baseURL}`, this.data);
    }
  }
}
