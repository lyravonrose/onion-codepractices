// Create a module to generate the projects page. This module should require fs and and use it to read the contents of the projects directory and build a list of links and link text to put into html. The link href can be to the project directory and the link text can just be the name of the directory containing the project. Finally, this module should add to its exports a method that returns the html string it created.

// Your main module should require the module that generates the project page HTML and write the string returned by the function it exposes to the response if the request's url property equals '/'.

const fs = require("fs");
const path = require("path");

module.exports.generateOverviewHtml = (req, res) => {
    fs.readdir(`${__dirname}/projects`, (err, content) => {
        if (err) {
            console.log("err", err);
        }
        console.log("content", content);

        const href = `${__dirname}/projects`;
        res.setHeader("Content-Type", "text/html");
        res.write("<ul>");
        content.forEach((link) =>
            res.write(`<li><a href="${href}">${link}</a></li>`)
        );
        res.write("</ul>");
        res.end();
    });
};

//readdir
