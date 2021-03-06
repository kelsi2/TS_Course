"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
// 1. Load
var fs_1 = __importDefault(require("fs"));
// Make our file reading something we can use as we need it, rather than hard coded
var CsvFileReader = /** @class */ (function () {
    // Pass in the filename we want to open
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            // What kind of content we expect the file to have, in this case text so return a string
            encoding: "utf-8",
        })
            // Parse the giant string by creating an array of arrays containing each match in a single array
            .split("\n")
            .map(function (row) {
            return row.split(",");
        });
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
