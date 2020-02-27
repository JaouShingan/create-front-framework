"use strict"

const fs = require('fs');
const path = require('path');
const deleteDir = require('delete-directory');
const download = require('../src/utils/downloadFile');
const install = require('./utils/install');
const gitMap = require('./gitMap');

module.exports = async function (appName, uiFramework) {
    if (appName) {
        const projectPath = path.resolve(appName);
        if (fs.existsSync(projectPath)) {
            await deleteDir(projectPath);
        }
        // 根据项目名创建目录
        fs.mkdir(projectPath, async (err) => {
            if (err) {
                console.log(err);
            } else {
                let gitResp = '';
                const key = `vue-${uiFramework}`;
                if (gitMap[key]) {
                    gitResp = gitMap[key];
                } else {
                    gitResp = gitMap['vue-master'];
                }
                const downloadResult = await download(gitResp, projectPath);
                if (downloadResult) {
                    install(projectPath);
                }
            }
        });
    } else {
        console.log('please input your projecte name')
    }
}