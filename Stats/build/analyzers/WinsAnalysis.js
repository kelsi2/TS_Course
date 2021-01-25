"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
var MatchResult_1 = require("../MatchResult");
// Implement the Analyzer interface to make sure it is following the expected interface format
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(team) {
        this.team = team;
    }
    WinsAnalysis.prototype.run = function (matches) {
        // 3. Analyze
        // Analyze data to find all Man United wins either home or away
        var wins = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            // These comparisons would be unclear if reviewed in the future...we need to find a way to make this make sense later without reviewing the data
            // if (match[1] === "Man United" && match[5] === "H") {
            // Option 1: create homeWin and awayWin variables. Issue: We aren't accounting for the Draw possibility. Add the variable above but we aren't using it...e.g. it could easily be deleted
            // Option 2: Create MatchResult object with possible outcomes, this makes the comparisons very clear and it's easy to tell what the possible outcomes are
            // Option 3: Use an enum (enumeration)
            if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
                wins++;
                // } else if (match[2] === "Man United" && match[5] === "A") {
            }
            else if (match[2] === "Man United" &&
                match[5] === MatchResult_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return "Team " + this.team + " won " + wins + " games";
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
