const fs = require("fs");
const { readdir, stat } = require("fs").promises;
const { promisify } = require("util");
console.log("__dirname", __dirname);
const path = __dirname + "/files";
// const metaData = fs.statSync(__dirname + "/files");
// const size = fs.stat.size;
readdir = promisify(readdir);
stat = promisify(stat);
// const path = __dirname + "/fun-with-fs"
const logSizes = (path) => {
    return readdir(path, { withFileTypes: true }).then((metaData) => {
        // console.log(metaData);

        for (let i = 0; i < metaData.length; i++) {
            if (metaData[i].isFile()) {
                stat(path + "/" + metaData[i].name)
                    .then((stats) => {
                        console.log(
                            __dirname + "/files" + "/" + metaData[i].name,
                            stats.size
                        );
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else {
                logSizes(path + "/" + metaData[i].name);
            }
        }
    });
};
logSizes(path);
