#!/usr/bin/env node

// Ours
const list = require('../lib/region/list');

const log = console.log;

list.then(table => {
  log(table.toString());
});
