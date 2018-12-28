'use strict';

const ablecloud = require('./lib/ablecloud');

module.exports = app => {
  if (app.config.ablecloud.app) ablecloud(app);
};
