const fs = require('fs');

module.exports = function readFile(fileLocation, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileLocation, encoding, (err, rawData) => {
      if (err) {
        reject(err);
      }
      resolve(rawData);
    });
  });
};
