'use strict';

const ablecloud = require('./lib/ablecloud');

module.exports = agent => {
  if (agent.config.ablecloud.agent) ablecloud(agent);
};
