import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";
import { CsvFileReader } from "./CsvFileReader";

// Define tuple, data must always be in this exact order
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      // Type assertion (this is not a string, but an enum called MatchResult e.g. 'H', 'A', 'D')
      row[5] as MatchResult,
      row[6],
    ];
  }
}
