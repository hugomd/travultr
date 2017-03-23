const Table = require('cli-table');
const {red} = require('chalk');

const Errors = require('./errors');

const {handleAxiosError} = Errors;
const routes = require('./routes');
const tableOptions = require('./table-options');

const log = console.log;

class Plan {
  constructor(instance) {
    this.instance = instance;
  }

  list() {
    return this.instance
      .get(routes.plan.list)
      .then(res => {
        if (res.status !== 200) {
          throw red(Errors.plan.list);
        }
        return res;
      })
      .then(({data: plans} = {}) => {
        const table = new Table(tableOptions['plan-list']);
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
        return log(table.toString());
      })
      .catch(handleAxiosError);
  }
}

module.exports = Plan;
