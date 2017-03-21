#!/usr/bin/env node

// Packages
const program = require('commander');

program
  .command('list', 'list available operating systems')
  .parse(process.argv);
