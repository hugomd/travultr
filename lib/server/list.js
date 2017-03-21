#!/usr/bin/env node

const fetch = require('node-fetch');
const {green, red} = require('chalk');
const Table = require('cli-table');
const routes = require('../routes');
const tableOptions = require('../table-options');

const table = new Table(tableOptions['server-list']);

module.exports = fetch(routes.server.list, {
  method: 'GET',
  headers: {
    'API-Key': process.env.VULTR_API_TOKEN
  }
})
.then(res => res.json())
.then(servers => {
  Object.keys(servers).map(key => {
    const details = servers[key];
    let {
      main_ip,
      label,
      pending_charges,
      os,
      ram,
      location,
      status
    } = details;

    status = (status === 'active') ? green(status) : red(status);
    return table.push([label, main_ip, status, ram, os, `$${pending_charges}`, location]);
  });
  return table;
});
