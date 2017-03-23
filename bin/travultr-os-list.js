#!/usr/bin/env node

// Ours
const Vultr = require('../lib/vultr');

const v = new Vultr();

v.os.list();
