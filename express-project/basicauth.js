const express = require("express");
const app = express();
const basicAuth = require("basic-auth");

app.get("*", (req, res) => {
    res.sendStatus(200);
});
app.listen(8080, () => console.log(`I'm listening.`));

//maxAge(1000 * 60 * 60 * 24 * 14)

const auth = function (req, res, next) {
    const creds = basicAuth(req);
    if (!creds || creds.name != "emperor" || creds.pass != "penguin") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to see this stuff."'
        );
        res.sendStatus(401);
    } else {
        next();
    }
};

app.use("/connect_4", auth);
