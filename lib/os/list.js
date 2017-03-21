#!/usr/bin/env node

const fetch = require('node-fetch');
const Table = require('cli-table');
const routes = require('../routes');
const tableOptions = require('../table-options');

const table = new Table(tableOptions['os-list']);

module.exports = fetch(routes.os.list, {
  method: 'GET',
  headers: {
    'API-Key': global.VULTR_API_TOKEN
  }
})
.then(res => res.json())
.then(os => {
  Object.keys(os).map(key => {
    const details = os[key];
    const {
      OSID,
      name,
      arch,
      family
    } = details;

    return table.push([OSID, name, arch, family]);
  });
  return table;
});
