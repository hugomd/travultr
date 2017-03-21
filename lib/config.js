const os = require('os');
const {join} = require('path');
const fs = require('fs-promise');

exports.getConfig = () => {
  const file = join(os.homedir(), '.travultr.js');
  return fs.readFile(file);
};
