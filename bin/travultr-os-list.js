#!/usr/bin/env node

// Ours
const os = require('../lib/operating-system');

const list = async () => {
  await os.list();
};

list();