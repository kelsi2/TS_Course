"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
var CsvFileReader_1 = require("./CsvFileReader");
var utils_1 = require("./utils");
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    MatchReader.fromCsv = function (filename) {
        return new MatchReader(new CsvFileReader_1.CsvFileReader(filename));
    };
    MatchReader.prototype.load = function () {
        this.reader.read();
        this.matches = this.reader.data
            // Convert data types of each index
            // This is not a good place for an array because we would need to define four possible types, instead we can use a tuple
            .map(function (row) {
            return [
                utils_1.dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                // Type assertion (this is not a string, but an enum called MatchResult e.g. 'H', 'A', 'D')
                row[5],
                row[6],
            ];
        });
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;