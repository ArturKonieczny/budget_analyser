const { readFile, parseCSV } = require('./tools');
const path = require('path');
const processCategories = require('./processCategories');
const categories = require('../resources/categories');

module.exports = function budgetAnalyser(config, runLocation) {
  const { inputFile, encoding, headers } = config;
  const inputFileLocation = path.join(runLocation, inputFile);

  readFile(inputFileLocation, encoding).then((resolve) => {
    const expenses = parseCSV(resolve, headers);

    processCategories(expenses, categories, config, runLocation);

    // console.log(expenses);
  }, (reject) => {
    console.log(`There was a problem loading your file:\n${reject}`);
  });
};
