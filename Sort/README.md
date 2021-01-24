# TypeScript Sort Algorithm

Learning to use Design Patterns with [TypeScript: The Complete Developer's Guide [2020]](https://www.udemy.com/course/typescript-the-complete-developers-guide/) on Udemy.

Goal: Sorting algorithm that takes in arrays of numbers, strings, and linked lists and sorts from least to greatest. One algorithm should be reusable enough to work for all of the above data structures.

### What I Learned

1. How to set up tsconfig.json file. outDir is where we place compiled code (build folder). rootDir is the directory that holds the source code (src folder). With this setup we can just run tsc and TypeScript will automatically compile our files correctly.<br/>
   Run tsc -w to make TS watch our files and automatically recompile when we make changes. Using nodemon module to keep our application up to date when changes are made, and concurrently module to compile and run changes at the same time.
2. Using Bubble Sort method for sorting numbers. This compares pairs of elements in an array by asking is the element on the left greater than the element on the right? If so, swap the pair and keep comparing until out of elements. Greatest element is guaranteed to be at the far right after the first iteration.<br/>
   We can then do a second iteration which will ignore the last element. The above comparisons are run again. This process continues until all elements have been considered. This element only works for arrays of numbers, when applied to strings it does not work due to ASCII character codes.
3. Using the | (or operator) on types means it will only give access to properties that are available on both. For number[] | string, only properties available to both types can be used. In this case there are no common properties so we get an error.<br/>
   Using type guards to allow TypeScript to see what type that section of code is, this way we have access to all methods available to that type.<br/>
   This is not a good approach. Each time we need to add a new type, the code gets bigger and bigger and we need to make changes in many places.
4. Using interfaces to acheive code reuse. We can swap all of the data types as long as the classes have a length, compare method, and swap method. We don't need to know how to sort them according to their type, the sort itself is very generic!
5. Working with linked lists: Each node has a value and a reference to the next value in the list. The final node has a next value of null. In our swap function we are only updating the value of the node, not the full node itself.
6. Using inheritance to share the sort method from Sorter class to all other classes. To do this we need to use Abstract Classes:

- Can't be used to create objects directly.
- Only used as parent classes.
- Can contain real implementation for some methods.
- Implemented methods can refer to other methods that don't exist yet (provide names and types for unimplemented methods).
- Can make child classes promise to implement some other method.

7. We still need both interfaces and inheritance! <br/>
   Interfaces:
   - Contract between different classes
   - Use when we have very different objects that we want to work together
   - Promotes loose coupling (no direct dependency between classes, they can function independently)
     Inheritance/Abstract Classes:
   - Sets up a contract between different classes
   - Use when we are trying to build up a definition of an object using similar classes
   - Strongly couples classes together (child classes cannot function without the parent class)
