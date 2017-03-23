const {stringify} = require('querystring');
const Table = require('cli-table');
const {red, green} = require('chalk');

const Errors = require('./errors');

const {handleAxiosError} = Errors;
const routes = require('./routes');
const tableOptions = require('./table-options');

const log = console.log;

class Server {
  constructor(instance) {
    this.instance = instance;
  }

  list() {
    return this.instance
      .get(routes.server.list)
      .then(res => {
        if (res.status !== 200) {
          throw red(Errors.os.list);
        }
        return res;
      })
      .then(({data: servers} = {}) => {
        const table = new Table(tableOptions['server-list']);
        Object.keys(servers).map(key => {
          const details = servers[key];
          let {
            SUBID,
            main_ip,
            label,
            pending_charges,
            os,
            ram,
            location,
            status
          } = details;

          status = (status === 'active') ? green(status) : red(status);
          return table.push([SUBID, label, main_ip, status, ram, os, `$${pending_charges}`, location]);
        });
        return log(table.toString());
      })
      .catch(handleAxiosError);
  }

  create(body) {
    return this.instance
      .post(routes.server.create, stringify(body))
      .then(res => {
        if (res.status !== 200) {
          throw red(Errors.server.create);
        }
        return res;
      })
      .then(({data: {SUBID}}) => {
        log(`Server created. SUBID is: ${SUBID}`);
      })
      .catch(handleAxiosError);
  }
}

module.exports = Server;
