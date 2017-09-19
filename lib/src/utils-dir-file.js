const fs = require('fs');
const fsx = require('fs-extra');
const path = require('path');
const log = console.log;

function mkDir(dir_name){
    fs.mkdirSync(dir_name);
    log(`dir ${dir_name} created`)
}

function rmDir(dir_name){
    fsx.removeSync(dir_name);
    log(`dir ${dir_name} removed`)
}

function createFile(dir, name, text){
    fs.writeFileSync(dir + name, text);
    log(`${name} created`);
}

function mkDirCustom(work_dir, dir_name){
    const DIR_NAME = dir_name;
    const DIR_PATH = DIR_NAME + path.sep;
    mkDir(work_dir + DIR_NAME);
    return DIR_PATH;
}

function copyFile(src, dst){
    fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

const __ASSETS = '.' + path.sep + 'src' + path.sep + 'assets' + path.sep;

module.exports = {
    mkDir,
    rmDir,
    mkDirCustom,
    copyFile,
    createFile,
    __ASSETS
}