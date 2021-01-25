"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
// Create an object that satisfies the 'DataReader' interface
var csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
// Create instance of MatchReader and pass in something satisfying 'DataReader' interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// 3. Analyze
// Analyze data to find all Man United wins either home or away
var manUnitedWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    // These comparisons would be unclear if reviewed in the future...we need to find a way to make this make sense later without reviewing the data
    // if (match[1] === "Man United" && match[5] === "H") {
    // Option 1: create homeWin and awayWin variables. Issue: We aren't accounting for the Draw possibility. Add the variable above but we aren't using it...e.g. it could easily be deleted
    // Option 2: Create MatchResult object with possible outcomes, this makes the comparisons very clear and it's easy to tell what the possible outcomes are
    // Option 3: Use an enum (enumeration)
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
        // } else if (match[2] === "Man United" && match[5] === "A") {
    }
    else if (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
// 4. Report
console.log("Man United won " + manUnitedWins + " games"); // 18 games
