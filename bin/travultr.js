#!/usr/bin/env node

// Packages
const program = require('commander');
const chalk = require('chalk');

// Ours
const pkg = require('../lib/pkg');

const log = console.log;

if (!process.env.VULTR_API_TOKEN) {
  log(chalk.red('VULTR_API_TOKEN environment variable must be set.'));
  process.exit(1);
}

program
  .version(pkg.version)
  .command('list', 'list available servers')
  .command('version', 'print travultr version').alias('v')
  .parse(process.argv);
