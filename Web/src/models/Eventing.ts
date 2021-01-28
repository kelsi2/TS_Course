// Function type is indicated as () => void as long as no args or return are needed
// Creating a type alias to make this cleaner
type Callback = () => void;

export class Eventing {
  // Type annotation for our events object (we don't know what the values are yet but we know the types so we declare that here for the on method below)
  events: { [key: string]: Callback[] } = {};

  // We need to support multiple listeners with the appropriate callback functions
  // When the event is called we will run all of the callbacks in the callback array (if any)
  on = (eventName: string, callback: Callback): void => {
    // this.events[eventName] => Callback[] or undefined (when user is first called this will be undefined but events will be added)

    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  };
}
