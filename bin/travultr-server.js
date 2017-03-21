#!/usr/bin/env node

// Packages
const program = require('commander');

program
  .command('list', 'list active or pending virtual machines')
  .command('create', 'create a new virtual machine')
  .parse(process.argv);
