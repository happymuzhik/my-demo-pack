const fs = require('fs');
const path = require('path');
const log = console.log;

const initPrDir = require('./src/init-project-dir');
const createReadme = require('./src/create-readme');
const createGitIgnore = require('./src/create-gitignore');
const createSrcDir = require('./src/create-src-dir');
const initProject = require('./src/init-project');
const modifPack = require('./src/modify-packagejson');
const installPacks = require('./src/install-packgs');

const DIR_NAME = process.argv[2];
const WORK_DIR = __dirname + path.sep + DIR_NAME + path.sep;

initPrDir(DIR_NAME);
createReadme(WORK_DIR, DIR_NAME);
createGitIgnore(WORK_DIR);
createSrcDir(WORK_DIR);
// initProject(WORK_DIR, function(){
//     modifPack(WORK_DIR);
//     installPacks(WORK_DIR, function(){
//         console.log(' Packges installed! ')
//     });
// });
