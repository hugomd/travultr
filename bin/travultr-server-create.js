#!/usr/bin/env node

// Packages
const program = require('commander');
const {red} = require('chalk');
const server = require('../lib/server');

const log = console.log;

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

const create = async payload => {
  try {
    await server.create(payload);
  } catch (err) {
    process.exit(1);
  }
};

create(payload);
