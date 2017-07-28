const saveFile = require('./tools/saveFile');
const path = require('path');

function updateInputFile(expenses, config, runLocation) {
  const { headers, inputFile, encoding } = config;
  const inputFileLocation = path.join(runLocation, inputFile);
  const inputFileContent = expenses.reduce((prevValue, currentItem) => {
    const expense = headers.map((header) => currentItem[header]);

    return `${prevValue}${expense.join(';')}\n`;
  }, '');

  saveFile(inputFileContent, inputFileLocation, encoding);
}

function updateCategoryFile(categories, config, runLocation) {
  const { categoryFile, encoding } = config;
  const categoryFileLocation = path.join(runLocation, categoryFile);
  const categoryFileLine = [];

  for (const prop in categories) {
    categoryFileLine.push(`${prop}: ['${categories[prop].join(`', '`)}']`);
  }

  const categoryFileContent = `module.exports = {\n${categoryFileLine.join(',\n')}\n};\n`;

  saveFile(categoryFileContent, categoryFileLocation, encoding);
}

module.exports = function processCategories(expenses, categories, config, runLocation) {
  updateInputFile(expenses, config, runLocation);
  updateCategoryFile(categories, config, runLocation);
};
