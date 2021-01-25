import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

// Define tuple, data must always be in this exact order
type MatchData = [Date, string, string, number, number, MatchResult, string];

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data
      // Convert data types of each index
      // This is not a good place for an array because we would need to define four possible types, instead we can use a tuple
      .map(
        (row: string[]): MatchData => {
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
      );
  }
}
