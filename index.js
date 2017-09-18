const fs = require('fs');
const askYesNo = require('cli-interact').getYesNo;
const initPrDir = require('./src/init-project-dir');
const log = console.log;

const DIR_NAME = process.argv[2];
initPrDir(DIR_NAME);

