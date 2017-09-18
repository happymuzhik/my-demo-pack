const { copyFile, __ASSETS } = require('./utils-dir-file');

module.exports = function(work_dir, name){
    const WEBPACK_FILE = 'webpack.config.js';
    copyFile(__ASSETS + WEBPACK_FILE, work_dir + WEBPACK_FILE);
}