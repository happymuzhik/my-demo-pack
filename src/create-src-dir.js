const fs = require('fs');
const path = require('path');
const { mkDir } = require('./utils-dir-file');

module.exports = function(work_dir) {
    const SRC = 'src';
    mkDir(work_dir + SRC);
}