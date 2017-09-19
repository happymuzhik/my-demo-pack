const spawnNpm = require('./spawn-npm-process');

const global_pkg = [
    'install',
    '-g',
    'webpack',
    'concurrently'
];
const dev_deps_pkg = [
    'install',
    '--save-dev',
    'autoprefixer-loader',
    'babel-core',
    'babel-loader',
    'babel-preset-env',
    'babel-preset-es2015',
    'babel-preset-react',
    'babel-preset-stage-0',
    'html-webpack-plugin',
    'webpack',
    'webpack-cleanup-plugin',
    'webpack-livereload-plugin',
    'concurrently'
];
const dev_pkg = [
    'install',
    '--save',
    'css-loader',
    'express',
    'morgan',
    'qwest',
    'react',
    'react-dom',
    'react-redux',
    'react-router-dom',
    'redux',
    'redux-logger',
    'style-loader',
    'stylus',
    'stylus-loader'
];

module.exports = function(work_dir, cb) {
    spawnNpm(work_dir, global_pkg)
    .then(
        () => spawnNpm(work_dir, dev_deps_pkg),
        (data) => {
            console.log('ERROR global_pkg !', data);
        }
    )
    .then(
        () => spawnNpm(work_dir, dev_pkg),
        (data) => {
            console.log('ERROR dev_deps_pkg !', data);
        }
    )
    .then(
        cb,
        (data) => {
            console.log('ERROR dev_pkg !', data);
        }
    )
}
