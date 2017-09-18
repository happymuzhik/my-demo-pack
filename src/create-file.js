const fs = require('fs');
const log = console.log;

module.exports = function(work_dir, name, text){
    fs.writeFileSync(work_dir + name, text);
    log(`${name} created`);
}