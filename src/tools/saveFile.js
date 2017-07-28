const fileSave = require('file-save');

module.exports = function saveFile(content, destination, encoding) {
  fileSave(destination).write(content, encoding)
    .end()
    .error((err) => console.log(err));
};
