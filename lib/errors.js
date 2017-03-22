const {red} = require('chalk');

const log = console.log;

exports.general = {
  noSUBID: 'Error no SUBID for server'
};

exports.os = {
  list: 'Error fetching operating system list.'
};

exports.server = {
  list: 'Error fetching server list.',
  fetch: 'Error fetching server information.'
};

exports.plans = {
  list: 'Error fetching plans.'
};

exports.handleAxiosError = err => {
  if (err.response) {
    log(red(err.response.data));
  } else if (err.message) {
    log(red(err.message));
  } else {
    log(red(err));
  }
  process.exit(1);
};
