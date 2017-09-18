const fs = require('fs');
const path = require('path');
const log = console.log;

const initPrDir = require('./src/init-project-dir');
const initReadme = require('./src/init-readme');

const DIR_NAME = process.argv[2];
const WORK_DIR = __dirname + path.sep + DIR_NAME + path.sep;

initPrDir(DIR_NAME);
initReadme(WORK_DIR, DIR_NAME);


