const Table = require('cli-table');
const {red, green} = require('chalk');
const Vultr = require('vyltr');

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
        power_status
      } = server;

      power_status = (power_status === 'running') ? green(power_status) : red(power_status);
      return table.push([SUBID, label, main_ip, power_status, ram, os, `$${pending_charges}`, location]);
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

exports.halt = async body => {
  try {
    await v.server.halt(body);
    log(`Server halted.`);
  } catch (err) {
    if (err) {
      return log(red(err));
    }
    throw new Error('Something went wrong.');
  }
};

exports.destroy = async body => {
  try {
    await v.server.destroy(body);
    log(`Server destroyed.`);
  } catch (err) {
    if (err) {
      return log(red(err));
    }
    throw new Error('Something went wrong.');
  }
};
