const fs = require('fs');
const { createFile } = require('./utils-dir-file');

module.exports = function(work_dir) {
    const filename = 'package.json';
    const fullname = work_dir + filename;
    let json_str = fs.readFileSync(fullname, 'utf8');
    let json = JSON.parse(json_str);
    json.scripts.start = 'concurrently —kill-others \"node server.js\" \"webpack -w\"';
    json_str = JSON.stringify(json, null, "    ");
    createFile(work_dir, filename, json_str);
}
