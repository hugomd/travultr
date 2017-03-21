#!/usr/bin/env node

// Packages
const program = require('commander');
const chalk = require('chalk');

// Ours
const pkg = require('../lib/pkg');
const config = require('../lib/config');

const log = console.log;

config.getConfig()
  .then(file => {
    const localConfig = require(file);
    if ('VULTR_API_TOKEN' in localConfig) {
      process.env.VULTR_API_TOKEN = localConfig.VULTR_API_TOKEN;
    } else {
      log(chalk.red('VULTR_API_TOKEN variable must be set in ~/.travultr.js'));
      process.exit(1);
    }

    program
      .version(pkg.version)
      .command('server', 'Access server resources')
      .command('os', 'Access operating system resources')
      .command('plan', 'Access plan resources')
      .command('region', 'Access region resources')
      .command('version', 'print travultr version').alias('v')
      .parse(process.argv)
    ;
  })
  .catch(err => {
    console.log(err);
    log(chalk.red('~/.travultr.js does not exist.'));
  })
;
