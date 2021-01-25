# TypeScript Stats

The goal of this project is to take in a csv spreadsheet, load in a NodeJS application, parse, analyze, and report it.

### What I Learned:

1. When working with Type Definition Files for Node JS, we can install one file for all Node JS functions using npm i @types/node.
2. System for dealing with data === Load (using Node fs) -> Parse -> Analyze -> Report.
3. How to use TS enums.

- Similar to JS objects but can only contain strings and numbers (when compiled these become objects).
- Values should be very closely related and should be a small set of data.
- Can reference values using '.' syntax like objects. The type is whatever the name of the enum is (in our example MatchResult).
- We can't come back later to change an enum, they need to be written at the time we are writing the code. Values need to be known (can't be obtained through a network request or looping over data).

4. Created a separate class for reading csv files, this is reusable in other projects. This is an abstract class, we then created a child subclass which is specific to this project.

5. Parsing date data from strings. Created reusable class to handle this functionality.

6. Working with generics:

- Like function arguments but for types in class/function definitions
- Allows us to define type of property/argument/return value at a future point
- Used heavily when writing reusable code

7. Alternative approach using interfaces. This doesn't rely on inheritance the same way generics does, instead readers are all separate classes that implement a DataReader interface which makes for more reusable code.
