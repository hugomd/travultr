#!/usr/bin/env node

// Native
// const {resolve} = require('path');
const pkg = require('./package');

// Packages
// const chalk = require('chalk');
const program = require('commander');

program
  .version(pkg.version)
  .command('list').description('List servers');

program.parse(process.argv);

// const bin = resolve(__dirname, 'lib', 'v-' + cmd + '.js');

// Prepare process.argv for subcommand
// process.argv = process.argv.slice(0, 2).concat(args);

// Load sub command
// With custom parameter to make "pkg" happy
// require(bin, 'may-exclude');
