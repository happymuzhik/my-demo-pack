const log = console.log;
const spawnNpm = require('./spawn-npm-process');

const cb = function(data) {
    console.log(data.toString());
}

module.exports = function(work_dir) {

    const npm = spawnNpm(work_dir, ['init'], cb);
    
}
