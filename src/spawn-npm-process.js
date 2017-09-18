const log = console.log;
const { spawn } = require('child_process');

module.exports = function(work_dir, params) {

    return new Promise(function(resolve, reject){

      const command = /^win/.test(process.platform) ? 'npm.cmd' : 'npm';
      
      const npm = spawn(command, params, {
          cwd: work_dir,
          stdio: [0]
      });
      
      npm.stdout.on('data', (data) => {
        console.log(data.toString());
      });
      
      npm.stderr.on('error', (data) => {
        reject(data.toString());
      });
      
      npm.on('exit', (code) => {
        console.log(`npm ${params.join(' ')} exited with code ${code}`);
        resolve();
      });

    });

}
