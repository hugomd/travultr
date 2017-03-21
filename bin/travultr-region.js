#!/usr/bin/env node

// Packages
const program = require('commander');

program
  .command('list', 'list regions')
  .parse(process.argv);
