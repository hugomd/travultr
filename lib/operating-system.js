const Table = require('cli-table');
const {red} = require('chalk');
const Vultr = require('vyltr');

const tableOptions = require('./table-options');

const log = console.log;

const v = new Vultr();

exports.list = async () => {
  try {
    const list = await v.os.list();
    const table = new Table(tableOptions['os-list']);
    list.map(os => {
      const {
        OSID,
        name,
        arch,
        family
      } = os;
      return table.push([OSID, name, arch, family]);
    });
    return log(table.toString());
  } catch (err) {
    if (err) {
      return log(red(err));
    }
    throw new Error('Something went wrong');
  }
};
