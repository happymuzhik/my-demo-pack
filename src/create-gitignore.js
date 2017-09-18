const createFile = require('./create-file');

module.exports = function(work_dir){
    const default_text = 'node_modules';
    createFile(work_dir, '.gitignore', default_text);
}