const PORT = 8081;
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const basicAuth = require("basic-auth");
const auth = function (req, res, next) {
    const creds = basicAuth(req);
    if (!creds || creds.name != "emperor" || creds.pass != "penguin1") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to see this stuff."'
        );
        res.sendStatus(401);
    } else {
        next();
    }
};

//middleware
app.use((req, res, next) => {
    console.log(`${Date.now()}\t${req.method}\t${req.url}`);
    next();
});
//Parse URL encoded form data:
app.use(express.urlencoded({ extended: false }));
// Serve Static Files:
app.use("/images", express.static(`${__dirname}/images`));
app.use("/projects", auth);

//process cookies
app.use(cookieParser({ maxAge: 1000 * 60 * 60 * 24 * 14 }));
//millisec/minutes/hours/days

// Simple GET Examples

app.get("/", (req, res) => {
    console.log("In GET /");
    console.log("Query", req.query);
    res.send("<h1>hola 🌸</h1>");
});
app.get("/contact", (req, res) => {
    console.log("In GET /contact");
    // Response method 1: res.send()
    res.send("<h1>Email:lyravonrose@gmail.com</h1>");
});

//Serve Files
app.get("/about", (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.get("/koala", (req, res) => {
    res.sendFile(`${__dirname}/../koala.jpeg`);
});

// Dynamic Route
app.get("/user/:id", (req, res) => {
    const id = req.params.id;
    res.send(`We're on the users page of user: ${id}`);
});

// Handling Form Data
app.get("/cute-animal", (req, res) => {
    res.sendFile(`${__dirname}/cute-animal-form.html`);
});

app.post("/cute-animal", (req, res) => {
    const data = req.body;
    console.log("In POST/ cute-animal");
    res.send(`The animal was ${data.animal} and its score is ${data.score}`);
});

// Reading and setting cookies
app.get("/cookies", (req, res) => {
    const cookies = req.cookies;
    console.log("cookies:\t", cookies);
    res.send(`You're cookies:${JSON.stringify(cookies)}`);
});

app.get("/set-cookies", (req, res) => {
    res.cookie("hello", "world");
    res.send("Yay, New cookie for you");
});
// Catch all route
app.get("*", (req, res) => {
    // res.send("You're in the catch all route!!!");
    res.redirect("/");
});

app.listen(8081, () => {
    console.log(`I'm listening on port ${PORT}🍇 \nhttp://localhost:${PORT}`);
});
