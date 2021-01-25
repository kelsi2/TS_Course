import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader("football.csv");

// Create instance of MatchReader and pass in something satisfying 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// 3. Analyze
// Analyze data to find all Man United wins either home or away
let manUnitedWins = 0;

for (let match of matchReader.matches) {
  // These comparisons would be unclear if reviewed in the future...we need to find a way to make this make sense later without reviewing the data
  // if (match[1] === "Man United" && match[5] === "H") {
  // Option 1: create homeWin and awayWin variables. Issue: We aren't accounting for the Draw possibility. Add the variable above but we aren't using it...e.g. it could easily be deleted
  // Option 2: Create MatchResult object with possible outcomes, this makes the comparisons very clear and it's easy to tell what the possible outcomes are
  // Option 3: Use an enum (enumeration)
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
    // } else if (match[2] === "Man United" && match[5] === "A") {
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

// 4. Report
console.log(`Man United won ${manUnitedWins} games`); // 18 games
