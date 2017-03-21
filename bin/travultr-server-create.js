#!/usr/bin/env node

// Packages
const p = require('prompt');

const createServer = require('../lib/server/create');

const payload = [
  'DCID',
  'VPSPLANID',
  'OSID',
  'label',
  'hostname'
];

p.start();

p.get(payload, (err, payload) => {
  if (err) {
    throw err;
  }
  payload.DCID = parseInt(payload.DCID, 10);
  payload.OSID = parseInt(payload.OSID, 10);
  payload.VPSPLANID = parseInt(payload.VPSPLANID, 10);

  createServer(payload)
    .then(res => console.log(res))
    .catch(err => console.log(err));
});
