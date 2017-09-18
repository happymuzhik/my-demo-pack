const fs = require('fs');
const path = require('path');
const log = console.log;

const initPrDir = require('./src/init-project-dir');
const createReadme = require('./src/create-readme');
const createGitIgnore = require('./src/create-gitignore');
const initProject = require('./src/init-project');

const DIR_NAME = process.argv[2];
const WORK_DIR = __dirname + path.sep + DIR_NAME + path.sep;

initPrDir(DIR_NAME);
createReadme(WORK_DIR, DIR_NAME);
createGitIgnore(WORK_DIR);
initProject(WORK_DIR);


