const fs = require('fs');
const log = console.log;

module.exports = function(work_dir, name){

    const default_text = 'node_modules';

    fs.appendFileSync(work_dir + '.gitignore', default_text);
    log('gitignore created');
}