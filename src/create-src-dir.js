const fs = require('fs');
const path = require('path');
const { mkDir, createFile, mkDirCustom, copyFile, __ASSETS } = require('./utils-dir-file');

module.exports = function(work_dir) {

    const HTML_FILE = 'index.html';

    const SRC_DIR = mkDirCustom(work_dir, 'src');
    createFile(work_dir + SRC_DIR, 'index.js');

    const APP_DIR = mkDirCustom(work_dir, SRC_DIR + 'app');    

    const HTML_DIR = mkDirCustom(work_dir, SRC_DIR + 'html');
    copyFile(__ASSETS + HTML_FILE, work_dir + HTML_DIR + HTML_FILE);
    
    const COMMON_DIR = mkDirCustom(work_dir, APP_DIR + 'common');
    const UTILS_DIR = mkDirCustom(work_dir, APP_DIR + 'utils');
    const COMPS_DIR = mkDirCustom(work_dir, APP_DIR + 'components');
    const ASSETS_DIR = mkDirCustom(work_dir, APP_DIR + 'assets');
    const STYLES_DIR = mkDirCustom(work_dir, APP_DIR + 'styles');
    createFile(work_dir + STYLES_DIR, 'common.styl');

}