"use strict"
const child_process = require('child_process');

const exec = child_process.exec;

module.exports =  (projectPath) => {
    console.log('exec npm install')
    exec('npm install',  { cwd: projectPath },(err, stdout, stderr) => {
        if (err) {
            console.log(err, stdout, stderr)
        } else {
            console.log('npm install completed!')
        }
    })
}
