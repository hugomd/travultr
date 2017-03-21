#!/usr/bin/env node

// Packages
const program = require('commander');

program
  .command('list', 'list available plans')
  .parse(process.argv);
