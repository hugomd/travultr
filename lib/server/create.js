#!/usr/bin/env node

const request = require('superagent');
const routes = require('../routes');

module.exports = body => {
  return new Promise((resolve, reject) => {
    request
      .post(routes.server.create)
      .set('API-Key', process.env.VULTR_API_TOKEN)
      .type('form')
      .send(body)
      .end((err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      });
  });
  // .then(res => res.json());
};
