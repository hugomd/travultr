const Table = require('cli-table');
const {red, green} = require('chalk');
const Vultr = require('travultr-api');

const tableOptions = require('./table-options');

const log = console.log;

const v = new Vultr();

exports.list = async () => {
  try {
    const list = await v.server.list();
    const table = new Table(tableOptions['server-list']);
    list.map(server => {
      let {
        SUBID,
        main_ip,
        label,
        pending_charges,
        os,
        ram,
        location,
        status
      } = server;

      status = (status === 'active') ? green(status) : red(status);
      return table.push([SUBID, label, main_ip, status, ram, os, `$${pending_charges}`, location]);
    });
    return log(table.toString());
  } catch (err) {
    if (err) {
      return log(red(err));
    }
    throw new Error('Something went wrong.');
  }
};

exports.create = async body => {
  try {
    const server = await v.server.create(body);
    log(`Server created. SUBID is ${server}`);
  } catch (err) {
    if (err) {
      return log(red(err));
    }
    throw new Error('Something went wrong.');
  }
};
