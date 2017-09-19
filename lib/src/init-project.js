const spawnNpm = require('./spawn-npm-process');

module.exports = function(work_dir, cb) {
    return spawnNpm(work_dir, ['init', '-f']).then(cb,
        (data) => {
            console.log('ERROR!', data);
        }
    );
}
