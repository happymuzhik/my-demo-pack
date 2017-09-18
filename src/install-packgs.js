const spawnNpm = require('./spawn-npm-process');

const global_pkg = [
    '-g',
    'webpack',
    'concurrently'
];
const dev_deps_pkg = [
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
    // const npm = spawnNpm(work_dir, ['init', '-f'], function(){

    // });
    // const npm = spawnNpm(work_dir, ['init', '-f'], cb);
    // const npm = spawnNpm(work_dir, ['init', '-f'], cb);
}
