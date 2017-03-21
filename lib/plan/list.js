#!/usr/bin/env node

const fetch = require('node-fetch');
const Table = require('cli-table');
const routes = require('../routes');
const tableOptions = require('../table-options');

const table = new Table(tableOptions['plan-list']);

module.exports = (type = 'all') => {
  return fetch(`${routes.plan.list}?type=${type}`, {
    method: 'GET',
    headers: {
      'API-Key': global.VULTR_API_TOKEN
    }
  })
  .then(res => res.json())
  .then(plans => {
    Object.keys(plans).map(key => {
      const details = plans[key];
      const {
        VPSPLANID,
        vcpu_count,
        ram,
        disk,
        bandwidth,
        price_per_month,
        plan_type
      } = details;

      return table.push([VPSPLANID, vcpu_count, ram, disk, bandwidth, price_per_month, plan_type]);
    });
    return table;
  });
};
