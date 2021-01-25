// 1. Load
import fs from "fs";

// Make our file reading something we can use as we need it, rather than hard coded
export class CsvFileReader {
  data: string[][] = [];

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
      });
  }
}
