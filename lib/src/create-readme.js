const { createFile } = require('./utils-dir-file');

module.exports = function(work_dir, name){
    const default_text = '## ' + name.toString().toUpperCase();
    createFile(work_dir, 'README.md', default_text);
}