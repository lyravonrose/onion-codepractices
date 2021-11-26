const fs = require("fs");
console.log("__dirname", __dirname);
const path = __dirname + "/files";
// const metaData = fs.statSync(__dirname + "/files");
// const size = fs.stat.size;

// const path = __dirname + "/fun-with-fs"
const logSizes = (path) => {
    fs.readdir(path, { withFileTypes: true }, (err, metaData) => {
        // console.log(metaData);

        if (err) {
            console.log(err);
            return;
        }
        for (let i = 0; i < metaData.length; i++) {
            if (metaData[i].isFile()) {
                fs.stat(path + "/" + metaData[i].name, (err, stats) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.log(
                        __dirname + "/files" + "/" + metaData[i].name,
                        stats.size
                    );
                });
            } else {
                logSizes(path + "/" + metaData[i].name);
            }
        }
    });
};
logSizes(path);
