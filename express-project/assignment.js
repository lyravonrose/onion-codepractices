const PORT = 8080;
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use("/projects", express.static(`${__dirname}/projects`));
app.use(cookieParser());

app.use((req, res, next) => {
    console.log(`${req.method}\n${req.url}`);
    const cookies = req.cookies;
    console.log("cookies:\t", cookies);
    if (req.url !== "/cookies") {
        console.log("Authentication needed");
        if (req.cookies.accepted === "yes") {
            next();
        } else {
            res.redirect("/cookies");
        }
    }
});

app.get("/", (req, res) => {
    console.log("In GET /");
    console.log("Query", req.query);
    res.send("<h1>Lyra's Spotify Top Genres 2021</h1>");
});

app.get("/cookies", (req, res) => {
    res.send(
        `
            <form action="/cookies" method="post">
                <p>Do you accept 🍪?</p>
                <input type="checkbox" name="accept" />I accept 🍪
                <div>
                  <button type="submit">OK</button>
                </div>
            </form>
        `
    );
});

app.post("/cookies", (req, res) => {
    const data = req.body;
    console.log("In POST/ cookies", req.body);
    if (data) {
        res.cookie("Hello 🍪");
        res.redirect(`${req.url}`);
    } else {
        res.send(`please accept ${data} 🤡`);
    }
});

app.listen(PORT, () => {
    console.log(`I'm listening on port ${PORT}🍤 \nhttp://localhost:${PORT}`);
});
