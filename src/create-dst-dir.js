const fs = require('fs');
const path = require('path');
const { mkDir, createFile, mkDirCustom, copyFile, __ASSETS } = require('./utils-dir-file');

module.exports = function(work_dir) {

    const CSS_FILE = 'normalize.css';

    const DST_DIR = mkDirCustom(work_dir, 'dst');
    const ASSETS_DIR = mkDirCustom(work_dir, DST_DIR + 'assets');

    copyFile(__ASSETS + CSS_FILE, work_dir + ASSETS_DIR + CSS_FILE);

}