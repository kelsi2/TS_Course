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
