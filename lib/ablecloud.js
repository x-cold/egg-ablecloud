'use strict';

const assert = require('assert');

module.exports = app => {
  app.addSingleton('ablecloud', createOneClient);
};

function createOneClient(config, app) {
  const { developerId, majorDomain, subDomain, ak, sk, router } = config;
  assert(developerId && majorDomain && ak && sk && router,
    `[egg-ablecloud] 'developerId: ${developerId}', 'majorDomain: ${majorDomain}', 'ak: ${ak}', 'sk: ${sk}', 'router: ${router}' are required on config`);
  const AbleCloud = require('ablecloud-sdk');
  const ac = new AbleCloud({ developerId, majorDomain, subDomain, ak, sk, router });
  app.coreLogger.info('[egg-ablecloud] init success!');
  return ac;
}
