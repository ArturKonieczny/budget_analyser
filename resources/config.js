/*
Headers field must contain at least ammount, description, date and category.
*/
module.exports = {
  inputFile: 'resources/input.csv',
  outputFile: 'output.csv',
  encoding: 'utf8',
  headers: ['ammount', 'description', 'date', 'category'],
  dateFormat: 'DD.MM.YYYY'
};
