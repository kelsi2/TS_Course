"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
var dateStringToDate = function (dateString) {
    var dateParts = dateString
        // Split the date on each slash e.g. 28/10/2018 => ['28', '10', '2018']
        .split("/")
        // Turn each index into a number
        .map(function (value) {
        return parseInt(value);
    });
    // Year, month (minus 1 because January is 0 indexed), day
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringToDate = dateStringToDate;
