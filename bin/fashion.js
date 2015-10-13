#!/usr/bin/env node

'use strict';

const Liftoff = require('liftoff');
const interpret = require('interpret');
var argv = require('minimist')(process.argv.slice(2));


const cli = new Liftoff({
  name: 'fashion',
  extensions: interpret.jsVariants
});


argv.configPath = 'argv.fashionfile';
console.log(argv.cwd);
cli.launch({argv}, invoke);


function invoke (env) {
  require(env.configPath);
}
