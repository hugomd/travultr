const axios = require('axios');

// Subclasses
const OperatingSystem = require('./operating-system');
const Plan = require('./plan');
const Server = require('./server');
const Region = require('./region');

axios.defaults.headers.common['API-Key'] = process.env.VULTR_API_TOKEN;

class Vultr {
  constructor() {
    // Setup Axios
    const instance = axios.create({
      baseURL: 'https://api.vultr.com/v1/',
      timeout: 5000,
      headers: {'API-Key': process.env.VULTR_API_TOKEN}
    });

    // Subclasses
    this.os = new OperatingSystem(instance);
    this.plan = new Plan(instance);
    this.region = new Region(instance);
    this.server = new Server(instance);
  }

  getInstance() {
    return this.instance;
  }
}

module.exports = Vultr;
