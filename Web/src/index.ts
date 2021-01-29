import { User } from "./models/User";

// We are indicating this user has a backend representation since it has an id. The info can be retrieved from the server
const user = User.buildUser({ id: 1 });

user.on("change", () => {
  console.log(user);
});

user.fetch();
