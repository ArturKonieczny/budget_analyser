const config = require('./resources/config');
const readFile = require('./src/tools/readFile');
const path = require('path');

readFile(path.join(__dirname, 'resources', config.inputFile)).then((resolve) => {
  console.log(resolve);
}, (reject) => {
  console.log(reject);
});
