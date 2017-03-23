const Table = require('cli-table');
const {red} = require('chalk');

const Errors = require('./errors');

const {handleAxiosError} = Errors;
const routes = require('./routes');
const tableOptions = require('./table-options');

const log = console.log;

class OperatingSystem {
  constructor(instance) {
    this.instance = instance;
  }

  list() {
    return this.instance
      .get(routes.os.list)
      .then(res => {
        if (res.status !== 200) {
          throw red(Errors.os.list);
        }
        return res;
      })
      .then(({data: os} = {}) => {
        const table = new Table(tableOptions['os-list']);
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

        return log(table.toString());
      })
      .catch(handleAxiosError);
  }
}

module.exports = OperatingSystem;
