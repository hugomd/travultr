#!/usr/bin/env node

// Ours
const server = require('../lib/server');

const list = async () => {
  await server.list();
};

list();
