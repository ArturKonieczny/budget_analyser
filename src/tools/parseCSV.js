const normalise = require('./normaliseString');

function parseRow(row, headers) {
  const expenseRow = row.split(';').map(normalise);

  return expenseRow.reduce((expense, field, index) => {
    expense[headers[index]] = field;

    return expense;
  }, {});
}

module.exports = function parseCSV(rawFile, headers) {
  const csvLines = rawFile.split(/\r\n|\n/);

  return csvLines.map((row) => parseRow(row, headers));
};
