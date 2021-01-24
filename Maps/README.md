# Maps

Learning to use Design Patterns with [TypeScript: The Complete Developer's Guide [2020]](https://www.udemy.com/course/typescript-the-complete-developers-guide/) on Udemy.
The goal of this app is to generate a random user and company and show them on a Google map.

### What I Learned

1. Greater familiarity with classes and interfaces. Best practice is to have separate files for each class (in this app for example we build classes for map, user, and company, all in separate files in the src folder). Classes are imported to the index.ts file which is converted to JavaScript to be displayed in the browser.
2. How to use Parcel Bundler.
3. Exported classes have capital letter names (similar to React components). Files that make something happen or serve as a root have lower cased names.
4. Using faker to generate random data.
5. Downloading type definition files to tell TypeScript what the types are for the JavaScript libraries we are importing, such as faker, which don't come automatically included with the library.<br/>
   To view these files hold ctrl/cmd and click the library name. This is a very useful source of documentation for imported libraries.
6. Don't use "export default", best practice is to use "export" on its own. This way there is no question of whether or not to use curly braces when importing (we always use them).
7. Using Google Maps API.
8. Using classes to limit what methods are available so our map doesn't get broken. We hid the builtin methods by creating a Map class rather than just pulling the methods directly from the API.
9. Best practice for making code reusable using interfaces. These should be implemented in whatever classes we want to use that interface to see errors in the correct place.
