import { ConsoleReport } from "./reportTargets/ConsoleReports";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { MatchReader } from "./MatchReader";

const matchReader = MatchReader.fromCsv("football.csv");
const summary = Summary.WinsAnalysisWithHtmlReport("Man United");
const consoleSummary = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReport()
);

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
consoleSummary.buildAndPrintReport(matchReader.matches);
