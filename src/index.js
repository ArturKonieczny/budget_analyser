const { readFile, parseCSV } = require('./tools');
const path = require('path');

module.exports = function budgetAnalyser(config, runLocation) {
  const { inputFile, encoding, headers } = config;

  readFile(path.join(runLocation, inputFile), encoding).then((resolve) => {
    const expenses = parseCSV(resolve, headers);

    console.log(expenses);
  }, (reject) => {
    console.log(`There was a problem loading your file:\n${reject}`);
  });
};
