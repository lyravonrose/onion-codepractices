const cluster = require("cluster");
const os = require("os");

console.log(cluster.isMaster ? "master" : "worker");

cluster.setupMaster({
    exec: "./index.js",
});

// if (cluster.isMaster) {}
for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
}
// }
cluster.on("exit", (worker) => {
    console.log(worker.process.pid + " died 🕊✨🕊✨🕊");
    cluster.fork();
});
