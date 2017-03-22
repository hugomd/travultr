#!/usr/bin/env node

// Packages
const program = require('commander');
const {red} = require('chalk');

const log = console.log;
const Vultr = require('../lib/vultr');

const v = new Vultr();

program
  .option('-d, --dcid <n>', 'Datacentre ID', parseInt)
  .option('-o, --osid <n>', 'Operating System ID', parseInt)
  .option('-v, --vpsplanid <n>', 'VPS Plan ID', parseInt)
  .option('-l, --label <s>', 'VPS label')
  .option('-H, --hostname <s>', 'VPS hostname')
  .parse(process.argv);

let missingFlag = false;
const requiredFlags = ['dcid', 'osid', 'vpsplanid'];
requiredFlags.map(f => {
  if (!program[f]) {
    log(red(`${f} is required.`));
    missingFlag = true;
  }
});

if (missingFlag) {
  process.exit(1);
}

const payload = {};

if (program.dcid !== '') payload.DCID = program.dcid;
if (program.osid !== '') payload.OSID = program.osid;
if (program.vpsplanid !== '') payload.VPSPLANID = program.vpsplanid;
if (program.label !== '') payload.label = program.label;
if (program.hostname !== '') payload.hostname = program.hostname;

v.createServer(payload)
  .then(({status}) => {
    if (status !== 200) {
      throw log(red('Error creating server.'));
    }
  })
  .catch(() => process.exit(1));
