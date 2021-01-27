import { User } from "./models/User";

// We are indicating this user has a backend representation since it has an id. The info can be retrieved from the server
const user = new User({ name: "new record", age: 0 });

user.save();
