const express = require("express");
const app = express();
const hb = require("express-handlebars");
const myProjects = require("./data.json");
// const listProjects = require("./data.json");
const { create } = require("express-handlebars");

console.log("myProjects🕊:", myProjects);

//create an instance of express-handlebars
const hbs = create({
    helpers: {
        getRandomNum() {
            return Math.floor(Math.random() * 250);
        },
    },
});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static("./public"));
app.use(express.static("./projects"));

// app.locals.helpers = {
//     getRandomNum() {
//         return Math.floor(Math.random() * 250);
//     },
// };
app.get("/", (req, res) => {
    res.render("home", {
        guest: "You 🧸✨",
        myProjects,
        snowflakes: [0, 0, 0, 0, 0, 0, 0, 0],
        // helpers: {
        //     toUpperCase(text) {
        //         return text.toUpperCase();
        //     },
        // },
        helpers: {
            ...app.locals.helpers, //this ensures that we don't lose any helpers that we defined globally with app.locals
        },
        // },
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        layout: "main",
        emoji: ["🐇", "🦢", "🕊"],
    });
});

app.get("/projects/:project", (req, res) => {
    const requestedProject = req.params.project;
    const proj = myProjects.find((item) => item.directory == requestedProject);
    if (!proj) {
        return res.sendStatus(404);
    } else {
        res.render("description", {
            layout: "main",
            proj,
            myProjects,
        });
    }
});

app.listen(8080, () => console.log("Server listening 🌸🍜"));

// let arr = ["pink", "purple", "blue", "purple", "red"];
// undefined;
// arr.find((col) => col === "purple");
// ("purple");
// arr.find((col) => col === "white");
// undefined;

//   // do this logic inside your dynmic route:
//   const requestedProject = req.params.project;
// console.log(req.params)
//    // you can also use destructuring:
//    // const { project } = req.params;

//    const selectedProject = yourArrayOfProjects.find(item => item.name == requestedProject);
//    if(!selectedProject) {
//        return res.sendStatus(404)
//    }
