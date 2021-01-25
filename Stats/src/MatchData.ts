import { MatchResult } from "./MatchResult";

// Define tuple, data must always be in this exact order
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];
