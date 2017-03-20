#!/usr/bin/env node

const fetch = require('node-fetch');
const {green, red} = require('chalk');
const Table = require('cli-table');
const tableOptions = require('../../lib/table-options');

const log = console.log;

const table = new Table(tableOptions['server-list']);

fetch('https://api.vultr.com/v1/server/list', {
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

  log(table.toString());
})
;
