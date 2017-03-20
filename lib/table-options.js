const {bold} = require('chalk');

const tableOptions = {
  'server-list': {
    head: ['Label', 'IP', 'Status', 'RAM', 'OS', 'Charges', 'Location'].map(h => bold.white(h)),
    chars: {
      top: '',
      'top-mid': '',
      'top-left': '',
      'top-right': '',
      bottom: '',
      'bottom-mid': '',
      'bottom-left': '',
      'bottom-right': '',
      left: '',
      'left-mid': '',
      mid: '',
      'mid-mid': '',
      right: '',
      'right-mid': '',
      middle: ' '
    },
    style: {'padding-left': 0, 'padding-right': 0}
  }
};

module.exports = tableOptions;
