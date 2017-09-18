const log = console.log;
const { spawn } = require('child_process');

module.exports = function(work_dir, params, cb) {

    const command = /^win/.test(process.platform) ? 'npm.cmd' : 'npm';

    const npm = spawn(command, params, {
        cwd: work_dir
    });
    
    npm.stdout.on('data', (data) => {
      if (typeof cb === 'function') {
        cb(data);
      }
    });
    
    npm.stderr.on('data', (data) => {
      console.log(data.toString());
    });
    
    npm.on('exit', (code) => {
      console.log(`npm ${params.join(' ')} exited with code ${code}`);
    });
}
