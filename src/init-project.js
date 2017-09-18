const log = console.log;
const spawnNpm = require('./spawn-npm-process');

module.exports = function(work_dir, cb) {
    const npm = spawnNpm(work_dir, ['init', '-f'], cb);
}
