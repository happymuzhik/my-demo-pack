const fs = require('fs');
const path = require('path');
const { mkDir, createFile, mkDirCustom, copyFile, __ASSETS } = require('./utils-dir-file');

module.exports = function(work_dir) {

    const HTML_FILE = 'index.html';

    const SRC_DIR = mkDirCustom(work_dir, 'src');
    createFile(work_dir + SRC_DIR, 'index.js');
    copyFile(__ASSETS + HTML_FILE, work_dir + SRC_DIR + HTML_FILE);

    const APP_DIR = mkDirCustom(work_dir, SRC_DIR + 'app');    
    const COMMON_DIR = mkDirCustom(work_dir, APP_DIR + 'common');
    const UTILS_DIR = mkDirCustom(work_dir, COMMON_DIR + 'utils');
    const COMPS_DIR = mkDirCustom(work_dir, COMMON_DIR + 'components');
    const ASSETS_DIR = mkDirCustom(work_dir, COMMON_DIR + 'assets');
    const STYLES_DIR = mkDirCustom(work_dir, COMMON_DIR + 'styles');
    createFile(work_dir + STYLES_DIR, 'common.styl');

}