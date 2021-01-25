// 1. Load
import fs from "fs";

// Make our file reading something we can use as we need it, rather than hard coded
// Using a generic <TypeofData>(<T>) so this function can take in any data type we pass in which makes it reusable
export abstract class CsvFileReader<T> {
  data: T[] = [];

  // Pass in the filename we want to open
  constructor(public filename: string) {}

  // Use the child class to make this reusable function applicable to this project
  abstract mapRow(row: string[]): T;

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
      .map(this.mapRow);
  }
}
