#!/usr/bin/env node

const SimpleDeploy = require('./simple-deploy');
const args = process.argv;
const simpleDeploy = new SimpleDeploy(args[2], args[3]);
simpleDeploy.watch();
