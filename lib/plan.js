const Table = require('cli-table');
const {red} = require('chalk');
const Vultr = require('travultr-api');

const tableOptions = require('./table-options');

const log = console.log;

const v = new Vultr();

exports.list = async () => {
  try {
    const list = await v.plan.list();
    const table = new Table(tableOptions['plan-list']);
    list.map(plan => {
      const {
        VPSPLANID,
        vcpu_count,
        ram,
        disk,
        bandwidth,
        price_per_month,
        plan_type
      } = plan;

      return table.push([VPSPLANID, vcpu_count, ram, disk, bandwidth, price_per_month, plan_type]);
    });
    return log(table.toString());
  } catch (err) {
    if (err) {
      return log(red(err));
    }
    throw new Error('Something went wrong');
  }
};
