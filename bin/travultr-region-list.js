#!/usr/bin/env node

// Ours
const region = require('../lib/region');

const list = async () => {
  await region.list();
};

list();
