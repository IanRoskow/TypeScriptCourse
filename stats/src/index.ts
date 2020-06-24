import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';

const matchReader = MatchReader.fromCsv('original.csv');
matchReader.load();

const summary = new Summary(
    new WinsAnalysis('Man United'),
    new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);
