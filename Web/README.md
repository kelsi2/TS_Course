# Web Framework

The goal of this project is to build a web framework application. We are using Model Classes to handle data (used to represent Users, Blog Posts, Images, etc.) and View Classes which handle HTML and events caused by the user (e.g. clicks).

## App Requirements

1. Create a class to represent a user and all its data (like name and age)
2. User class needs to have the ability to store data, retrieve it, and change it
3. User class needs the ability to notify the rest of the app when some data is changed
4. User needs to be able to persist data to an outside server and then retrieve it at some future point

## Approach

1. Build User class as a 'mega' class with all methods
2. Refactor User to use composition
3. Refactor User to be a reusable class that can represent any piece of data, not just a User

## What I Learned

1. How to use JSON Server, a pre-built server that runs with axios with almost no config. This can be easily exchanged with other servers that implement REST. IDs are automatically assigned with each request (e.g. if a user has an ID, it has a server-side representation, if not it's a new user). The config JSON file (db.json) is where routes are created and will log all data available on the server.
2. Options for working with data, these can be implemented with interfaces:

- Serialize - Convert data from an object into some savable format (json)
- Deserialize - Put data on an object using some previously saved data (json)

3. Strings can be types. E.g we can define a type BestName = 'stephen' and we will not be able to pass in any values to that type other than 'stephen'.

4. In JS/TS all object keys are strings. Even if they look like they have another type like number they are automatically strings. This is due to automatic type conversion, all other types are converted to strings. As a result keys of objects can be types (since strings can be types).

5. Generics can be used for methods as well as classes. See Attributes file for notes.

6. How to delegate methods to other classes. This allows using methods on User without saying something like user.attributes.get(), we can just use user.get().

7. Using models and views so I gained some familiarity with the MVC framework.

8. Creating an event map to bind events to HTML template. Methods are defined in the User model rather than the views.
