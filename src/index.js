const readFile = require('./tools/readFile');
const path = require('path');
const parseCSV = require('./tools/parseCSV');

module.exports = function budgetAnalyser(config, runLocation) {
  const { inputFile, encoding, headers } = config;

  readFile(path.join(runLocation, inputFile), encoding).then((resolve) => {
    const expenses = parseCSV(resolve, headers);

    console.log(expenses);
  }, (reject) => {
    console.log(`There was a problem loading your file:\n${reject}`);
  });
};
