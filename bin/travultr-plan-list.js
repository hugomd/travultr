#!/usr/bin/env node

// Ours
const plan = require('../lib/plan');

const list = async () => {
  await plan.list();
};

list();
