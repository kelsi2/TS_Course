// Decorators can be applied to any of these things (property, method, or accessor)
@classDecorator
class Boat {
  @testDecorator
  color: string = "red";

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError("Boat was sunk")
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    // throw new Error();
    if (speed === "fast") {
      console.log("swish");
    } else {
      console.log("Boat is too slow for sound");
    }
  }
}

// First arg is the prototype, will list all the getters and functions defined in the class
// Properties will not show up in this list since they are not added to the prototype (in this case color doesn't show up)
// Second arg is the key of the property/method/accessor on the object (in this case the decorator is applied to the pilot function so pilot is the key)
// Third arg (not included) is the property descriptor
// Decorators are applied when code is run, not when the instance is created (we aren't making an instance of Boat, but the decorator still runs)
// function testDecorator(target: any, key: string): void {
//   console.log("Target: ", target); // Target: Boat { formattedColor: [Getter], pilot: [Function] }
//   console.log("Key: ", key); // Key: pilot
// }

function testDecorator(target: any, key: string) {
  // This won't work because decorator can't access properties on an instance, it only has access to things that are on the prototype which properties are not
  console.log(target[key]);

  // This is the only way we can access a property using a decorator, it can tell us it exists as a key since the second arg is the property/method/accessor on the object (we aren't accessing the prototype)
  console.log(key);
}

// If we expect to see an error we can log an error easily with decorators
// function logError(target: any, key: string, desc: PropertyDescriptor): void {
//   const method = desc.value;

//   desc.value = function () {
//     try {
//       method();
//     } catch (e) {
//       console.log("Boat was sunk");
//     }
//   };
// }

// Creating a decorator factory, this allows us to pass values dynamically rather than hardcoding a particular error message
function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

// We can apply decorators directly to function arguments
// This will return the name of the function and the index of the argument (e.g. if there are multiple params it will return 0 for first arg, 1 for second arg, etc.)
function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

// Can apply decorators to a class itself
function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

// new Boat().pilot();
