const fs = require('fs');
const fsx = require('fs-extra');
const log = console.log;

function mkDir(dir_name){
    fs.mkdirSync(dir_name);
    log(`dir ${dir_name} created`)
}

function rmDir(dir_name){
    fsx.removeSync(dir_name);
    log(`dir ${dir_name} removed`)
}

function createFile(work_dir, name, text){
    fs.writeFileSync(work_dir + name, text);
    log(`${name} created`);
}

module.exports = {
    mkDir,
    rmDir,
    createFile
}