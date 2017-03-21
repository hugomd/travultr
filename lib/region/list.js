#!/usr/bin/env node

const fetch = require('node-fetch');
const Table = require('cli-table');
const routes = require('../routes');
const tableOptions = require('../table-options');

const table = new Table(tableOptions['region-list']);

module.exports = fetch(routes.region.list, {
  method: 'GET',
  headers: {
    'API-Key': process.env.VULTR_API_TOKEN
  }
})
.then(res => res.json())
.then(os => {
  Object.keys(os).map(key => {
    const details = os[key];
    const {
      DCID,
      name,
      country,
      ddos_protection,
      block_storage
    } = details;

    return table.push([DCID, name, country, ddos_protection, block_storage]);
  });
  return table;
});
