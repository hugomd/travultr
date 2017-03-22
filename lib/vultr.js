const {stringify} = require('querystring');
const axios = require('axios');
const {red, green} = require('chalk');
const Table = require('cli-table');

const routes = require('./routes');
const tableOptions = require('./table-options');
const Errors = require('./errors');

const {handleAxiosError} = Errors;
const log = console.log;

axios.defaults.headers.common['API-Key'] = process.env.VULTR_API_TOKEN;

class Vultr {
  /**
   * Operating Systems
   */
  listOS() {
    return axios
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

  /**
   * Plans
   */
  listPlans() {
    return axios
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

  /**
   * Regions
   */
  listRegions() {
    return axios
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

  /**
   * Servers
   */
  listServers() {
    return axios.get(routes.server.list)
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

  createServer(body) {
    return axios
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

module.exports = Vultr;
