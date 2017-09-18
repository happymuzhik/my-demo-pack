const fs = require('fs');
const askYesNo = require('cli-interact').getYesNo;
const log = console.log;

function mkDir(dir_name){
    fs.mkdirSync(dir_name);
    log(`dir ${dir_name} created`)
}

function rmDir(dir_name){
    fs.rmdirSync(dir_name);
    log(`dir ${dir_name} removed`)
}

module.exports = function(dir_name) {
    if (fs.existsSync(dir_name)) {
        const remove_dir = askYesNo('WARN! Dir with this name is existing! Recreate it?');
        if(remove_dir) {
            rmDir(dir_name);
            mkDir(dir_name);
        }
    } else {
        mkDir(dir_name);
    }
}
