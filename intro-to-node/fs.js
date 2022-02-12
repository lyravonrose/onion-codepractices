const fs = require("fs");

///WTITE A FILE ///
const path = __dirname + "/greeting.txt";

// sync
fs.writeFileSync(path, "Good Morning Onion 🌚");
// sync vs async

// async
// console.log("Before fs.writeFile()");

fs.writeFile(path, "🕊", (err) => {
    if (err) {
        console.log("error", err);
        return;
    }
    console.log("write file success");
});

// console.log("After fs.writeFile()");

/// READ A FILE'S CONTENT///

//readFileSync

const content = fs.readFileSync(__dirname + "/package.json", "utf8");

//async //callback

//readFile
fs.readFile(__dirname + "/package.json", "utf8", (err, content) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("🥰", typeof content);
});

// READ A FILE'S METADATA //

//statSync
const metaData = fs.statSync(__dirname + "/url-parsing.js");

//stats
fs.stat(__dirname + "/greeting.txt", (err, metaData) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(metaData);
});

// READ A DIRECTORY'S CONTENT //
// readdirSync
//readdir

function readSecrets(directoryPath) {
    fs.readdir(directoryPath, { withFileTypes: true }, (err, content) => {
        if (err) {
            console.log(err);
            return;
        }

        for (let i = 0; i < content.length; i++) {
            if (content[i].isFile()) {
                //STOP CONDITION
                //ACTION
                fs.readFile(
                    directoryPath + "/" + content[i].name,
                    "utf8",
                    (err, content) => {
                        if (err) {
                            console.log(err);
                            return;
                        }
                        console.log(content);
                    }
                );
            } else {
                //if it's NOT file and directory then RECURSION
            }
        }
        const entity0 = content[0];
        const entity1 = content[1];

        console.log("entity0.isFile():\t", entity0.isFile());
        console.log("entity1.isFile():\t", entity1.isFile());
    });
}
// readSecrets(`${__dirname}/secrets`);
// const content = fs.readFile(
//     __dirname + "/package.json",
//     "utf8",
//     (err, content) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log("✨", content);
//         // console.log("✨", typeof content);
//     }
// );

//statSync

//// Ex. Part 2 last part

const mapObject = {
    a: 1,
    b: 2,
    c: {
        funky: "chicken",
    },
};

const stringifiedMapObject = JSON.stringify(mapObject, null, 8);

console.log("stringifiedMapObject:\t", stringifiedMapObject);
