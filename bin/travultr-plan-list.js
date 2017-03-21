#!/usr/bin/env node

const {red} = require('chalk');

// Ours
const list = require('../lib/plan/list');

const log = console.log;

list().then(table => {
  log(table.toString());
}).catch(err => log(red(err)));
