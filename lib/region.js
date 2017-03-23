const Table = require('cli-table');
const {red} = require('chalk');

const Errors = require('./errors');

const {handleAxiosError} = Errors;
const routes = require('./routes');
const tableOptions = require('./table-options');

const log = console.log;

class Region {
  constructor(instance) {
    this.instance = instance;
  }

  list() {
    return this.instance
      .get(routes.region.list)
      .then(res => {
        if (res.status !== 200) {
          throw red(Errors.server.list);
        }
        return res;
      })
      .then(({data: regions} = {}) => {
        const table = new Table(tableOptions['region-list']);
        Object.keys(regions).map(key => {
          const details = regions[key];
          const {
            DCID,
            name,
            country,
            ddos_protection,
            block_storage
          } = details;

          return table.push([DCID, name, country, ddos_protection, block_storage]);
        });
        return log(table.toString());
      })
      .catch(handleAxiosError);
  }
}

module.exports = Region;
