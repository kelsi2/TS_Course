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
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
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
var Plane = /** @class */ (function () {
    function Plane() {
        this.color = "red";
    }
    // This will apply the metadata from the decorator to the fly method
    Plane.prototype.fly = function () {
        console.log("vrrrrr");
    };
    __decorate([
        markFunction("Hi there"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Plane.prototype, "fly", null);
    Plane = __decorate([
        printMetadata
    ], Plane);
    return Plane;
}());
// Combining metadata and decorator factory
function markFunction(secretInfo) {
    return function (target, key) {
        Reflect.defineMetadata("secret", secretInfo, target, key);
    };
}
// Note we need to use the class prototype to retrieve the metadata
// const secret = Reflect.getMetadata("secret", Plane.prototype, "fly");
// console.log(secret);
// This allows us to access the metadata using a decorator so we don't need to reach into the class prototype directly
function printMetadata(target) {
    for (var key in target.prototype) {
        var secret = Reflect.getMetadata("secret", target.prototype, key);
        console.log(secret);
    }
}
