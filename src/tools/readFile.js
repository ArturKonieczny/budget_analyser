const fs = require('fs');

module.exports = function readFile(fileLocation) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileLocation, 'utf8', (err, rawData) => {
      if (err) {
        reject(err);
      }
      resolve(rawData);
    });
  });
};
