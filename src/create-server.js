const { copyFile, __ASSETS } = require('./utils-dir-file');

module.exports = function(work_dir, name){
    const SERVER_FILE = 'server.js';
    copyFile(__ASSETS + SERVER_FILE, work_dir + SERVER_FILE);
}