"use strict"
const download = require('download-git-repo');

module.exports = function (gitResp, projectPath) {
    return new Promise((resolve, reject) => {
        console.log('开始下载文件')
        download(
            // 'JaouShingan/base-framework',
            `direct:${gitResp}`,
            projectPath,
            { clone: true },
            function (err) {
                if (err) {
                    console.log(err);
                    resolve(false);
                } else {
                    console.log('下载完毕')
                    resolve(true);
                }
            }
        )
    })
    
}
