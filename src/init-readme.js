const fs = require('fs');
const log = console.log;

module.exports = function(work_dir, name){

    const default_text = '## ' + name.toString().toUpperCase();

    fs.appendFileSync(work_dir + 'README.md', default_text);
    log('README created');
}