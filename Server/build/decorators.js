"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Decorators can be applied to any of these things (property, method, or accessor)
var Boat = /** @class */ (function () {
    function Boat() {
        this.color = "red";
    }
    Object.defineProperty(Boat.prototype, "formattedColor", {
        get: function () {
            return "This boats color is " + this.color;
        },
        enumerable: false,
        configurable: true
    });
    Boat.prototype.pilot = function (speed, generateWake) {
        // throw new Error();
        if (speed === "fast") {
            console.log("swish");
        }
        else {
            console.log("Boat is too slow for sound");
        }
    };
    __decorate([
        testDecorator,
        __metadata("design:type", String)
    ], Boat.prototype, "color", void 0);
    __decorate([
        testDecorator,
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], Boat.prototype, "formattedColor", null);
    __decorate([
        logError("Boat was sunk"),
        __param(0, parameterDecorator),
        __param(1, parameterDecorator),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Boolean]),
        __metadata("design:returntype", void 0)
    ], Boat.prototype, "pilot", null);
    Boat = __decorate([
        classDecorator
    ], Boat);
    return Boat;
}());
// First arg is the prototype, will list all the getters and functions defined in the class
// Properties will not show up in this list since they are not added to the prototype (in this case color doesn't show up)
// Second arg is the key of the property/method/accessor on the object (in this case the decorator is applied to the pilot function so pilot is the key)
// Third arg (not included) is the property descriptor
// Decorators are applied when code is run, not when the instance is created (we aren't making an instance of Boat, but the decorator still runs)
// function testDecorator(target: any, key: string): void {
//   console.log("Target: ", target); // Target: Boat { formattedColor: [Getter], pilot: [Function] }
//   console.log("Key: ", key); // Key: pilot
// }
function testDecorator(target, key) {
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
function logError(errorMessage) {
    return function (target, key, desc) {
        var method = desc.value;
        desc.value = function () {
            try {
                method();
            }
            catch (e) {
                console.log(errorMessage);
            }
        };
    };
}
// We can apply decorators directly to function arguments
// This will return the name of the function and the index of the argument (e.g. if there are multiple params it will return 0 for first arg, 1 for second arg, etc.)
function parameterDecorator(target, key, index) {
    console.log(key, index);
}
// Can apply decorators to a class itself
function classDecorator(constructor) {
    console.log(constructor);
}
// new Boat().pilot();
