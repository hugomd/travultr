#!/usr/bin/env node

// Packages
const program = require('commander');
const {red} = require('chalk');
const server = require('../lib/server');

const log = console.log;

program
  .option('-s, --subid <n>', 'Subscription ID', parseInt)
  .parse(process.argv);

let missingFlag = false;
const requiredFlags = ['subid'];
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

if (program.subid !== '') payload.SUBID = program.subid;

const destroy = async payload => {
  try {
    await server.destroy(payload);
  } catch (err) {
    process.exit(1);
  }
};

destroy(payload);
