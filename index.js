const { inputFile, encoding, headers } = require('./resources/config');
const readFile = require('./src/tools/readFile');
const path = require('path');
const parseCSV = require('./src/tools/parseCSV');

readFile(path.join(__dirname, inputFile), encoding).then((resolve) => {
  const expenses = parseCSV(resolve, headers);

  console.log(expenses);
}, (reject) => {
  console.log(`There was a problem loading your file:\n${reject}`);
});
