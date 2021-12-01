const http = require("http");
const fs = require("fs");
const path = require("path");
const pid = require("process");
const { generateOverviewHtml } = require("./generateOverview");
// console.log("generateOverviewHtml:", generateOverviewHtml);
const contentType = {
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".gif": "image/gif",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
};
//helper object to set the correct Content Type headers
// console.log("contentType['.css']", contentType[".css"]);
// console.log("contentType['.js']", contentType[".js"]);

http.createServer((req, res) => {
    req.on("error", (err) => console.log("err on request:", err));
    res.on("error", (err) => console.log("err on response:", err));

    //we only want to allow get request
    if (req.method != "GET") {
        console.log("not a GET request, not okay 😤");
        res.statusCode = 405; //method not allowed
        return res.end();
    }

    if (req.url === "/") {
        return generateOverviewHtml(req, res);
    }

    // understanding where my user is trying to go
    const filePath = path.normalize(__dirname + "/projects" + req.url);
    // we normalize so that we are capable to understand if
    // there is any traversal attack attmpts

    //protection against traversal attacks
    if (!filePath.startsWith(`${__dirname}/projects/`)) {
        console.log("Intruder alert 🚨");
        res.statusCode = 403; //forbidden
        return res.end();
    }
    // sending over the contents that the user requested
    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.log("❓no content found");
            res.statusCode = 404; // not found
            return res.end();
        }
        //if we get here that means the user requested something that exists
        if (stats.isDirectory()) {
            if (req.url.endsWith("/")) {
                // if whatever the user is requesting is a directory the
                // user should be served the index.html
                res.setHeader("Content-Type", "text/html");
                //# 1 create readstream

                console.log("! filepath", filePath);
                console.log("req.url", req.url);
                const readstreamIndexHtml = fs.createReadStream(
                    filePath + "index.html"
                );
                // #2 pipe the response to send file content
                readstreamIndexHtml.pipe(res);
                // #3 handle potential errors
                readstreamIndexHtml.on("error", (err) => {
                    console.log("err on readStream", err);
                    res.statusCode = 500; // internal server error
                    return res.end();
                });
            } else {
                console.log("else 1");
                // redirect the user to the same req.url, but add
                // a slash to it. If you forgot how to redirect
                // check back with the http-request-listner
                // exercise from yesterday :)
                // set header, set status code and end your response
            }
            // // console.log(
            // //     "made it here, user is making a request with the allowed method and is not trying to traverse to somewhere other than they should go"
            // // );
            // const fileStream = fs.createReadStream(
            //     __dirname + "/projects/pane/7_copy.jpg"
            // );
            // // #3 send over the file as a response using pipe
            // fileStream.pipe(res);

            // // we can ONLY use pipe on readable streams
        } else {
            // IF the user is requesting a file, that means we should
            // send over that file
            // to send the file
            // we need to
            // # 1 set the correct header
            const pathExt = path.extname(filePath);

            console.log("file extension", pathExt);

            res.setHeader("Content-Type", contentType[pathExt]);

            //# 1 create readstream
            const readStream = fs.createReadStream(filePath);
            // #2 pipe the response to send file content
            readStream.pipe(res);
            // #3 handle potential errors
            readStream.on("error", (err) => {
                console.log("err on readStream", err);
                res.statusCode = 500; // internal server error
                return res.end();
            });
        }
    });
}).listen(8080, () =>
    console.log(`pid ${process.pid} server listening!✨✨✨`)
);
