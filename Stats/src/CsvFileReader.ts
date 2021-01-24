import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";
// 1. Load
import fs from "fs";

// Define tuple, data must always be in this exact order
type MatchData = [Date, string, string, number, number, MatchResult, string];

// Make our file reading something we can use as we need it, rather than hard coded
export class CsvFileReader {
  data: MatchData[] = [];

  // Pass in the filename we want to open
  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        // What kind of content we expect the file to have, in this case text so return a string
        encoding: "utf-8",
      })
      // Parse the giant string by creating an array of arrays containing each match in a single array
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
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
