#!/usr/bin/env node

// Packages
const program = require('commander');

// Ours
const pkg = require('../lib/pkg');

program
  .version(pkg.version)
  .command('list', 'list available servers')
  .command('version', 'print travultr version').alias('v')
  .parse(process.argv);
