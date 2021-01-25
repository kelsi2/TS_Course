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

1.
