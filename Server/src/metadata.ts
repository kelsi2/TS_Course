import "reflect-metadata";

// const plane = {
//   color: "red",
// };

// We are basically adding another property to plane, but it is invisible (since it is metadata), we are just attaching information about the object
// Reflect.defineMetadata("note", "hi there", plane);
// Reflect.defineMetadata("height", 10, plane);

// Note doesn't show up
// console.log(plane);

// const note = Reflect.getMetadata("note", plane);
// const height = Reflect.getMetadata("height", plane);

// Now we can see note because we are retrieving the metadata using the key
// console.log(note);
// console.log(height);

// Attaching metadata to the color property in plane, rather than the whole object
// Reflect.defineMetadata("note", "hi there", plane, "color");

// const note = Reflect.getMetadata("note", plane, "color");

// The property of color is still red, but the metadata reads hi there
// console.log(note);
// console.log(plane);

@printMetadata
class Plane {
  color: string = "red";

  // This will apply the metadata from the decorator to the fly method
  @markFunction("Hi there")
  fly(): void {
    console.log("vrrrrr");
  }
}

// Combining metadata and decorator factory
function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("secret", secretInfo, target, key);
  };
}

// Note we need to use the class prototype to retrieve the metadata
// const secret = Reflect.getMetadata("secret", Plane.prototype, "fly");

// console.log(secret);

// This allows us to access the metadata using a decorator so we don't need to reach into the class prototype directly
function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata("secret", target.prototype, key);
    console.log(secret);
  }
}
