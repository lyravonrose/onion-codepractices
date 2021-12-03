const express = require("express");
const app = express();
const hb = require("express-handlebars");
const myProjects = require("./data.json");
// const emoji = require("./data.json");
console.log("myProjects🕊:", myProjects);

app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.use(express.static("./public"));
app.use(express.static("./projects"));

app.get("/", (req, res) => {
    res.render("home", {
        guest: "You 🧸✨",
        myProjects,
        snowflakes: [0, 0, 0, 0, 0, 0, 0, 0],
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        layout: "main",
        emoji: ["🐇", "🦢", "🕊"],
    });
});
app.listen(8080, () => console.log("Server listening 🌸🍜"));
