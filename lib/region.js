const Table = require('cli-table');
const {red} = require('chalk');
const Vultr = require('travultr-api');

const tableOptions = require('./table-options');

const log = console.log;

const v = new Vultr();

exports.list = async () => {
  try {
    const list = await v.region.list();
    const table = new Table(tableOptions['region-list']);
    list.map(region => {
      const {
        DCID,
        name,
        country,
        ddos_protection,
        block_storage
      } = region;

      return table.push([DCID, name, country, ddos_protection, block_storage]);
    });
    return log(table.toString());
  } catch (err) {
    if (err) {
      return log(red(err));
    }
    throw new Error('Something went wrong');
  }
};
