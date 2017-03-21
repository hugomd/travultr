const {bold} = require('chalk');

const chars = {
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
};
const style = {'padding-left': 0, 'padding-right': 0};

const tableOptions = {
  'server-list': {
    head: ['Label', 'IP', 'Status', 'RAM', 'OS', 'Charges', 'Location'].map(h => bold.white(h)),
    style,
    chars
  },
  'os-list': {
    head: ['OSID', 'Name', 'Arch', 'Family'].map(h => bold.white(h)),
    style,
    chars
  },
  'plan-list': {
    head: ['VPSPlanId', 'vCPU', 'RAM', 'Disk', 'B/W', 'Cost', 'Type'].map(h => bold.white(h)),
    style,
    chars
  },
  'region-list': {
    head: ['DCID', 'name', 'country', 'DDoS Protection', 'Block Storage'].map(h => bold.white(h)),
    style,
    chars
  }
};

module.exports = tableOptions;
