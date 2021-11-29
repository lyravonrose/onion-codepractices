const chalk = require("chalk");

// console.log(chalk.cyan("this will be in cyan"));
// console.log(chalk.magenta("this will be in magenta"));
const queryString = require("querystring");
const http = require("http");
const server = http.createServer((req, res) => {
    req.on("err", (err) => console.log("err in request:", err));
    res.on("err", (err) => console.log("err in response:", err));

    if (req.method === "GET") {
        res.write(`<!doctype html>
<html>
<title>Colors</title>
<form method="POST">
  <input type="text" name="text" placeholder="first name" autocomplete="off">
  <select name="color">
    <option value="red">red</option>
    <option value="blue">blue</option>
    <option value="green">green</option>
    <option value="yellow">yellow</option>
    <option value="gray">gray</option>
    <option value="magenta">magenta</option>
    <option value="cyan">cyan</option>
  </select>
  <button type="submit">Go</button>
</form>
</html>`);
        return res.end();
    }
    if (req.method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            // console.log("request is done streaming data");
            // console.log("body:", body);
            // we're parsing our body so that we can turn our
            // querystring into an actual javascript object
            // which is much easier to work with
            const parsedBody = queryString.parse(body);
            res.setHeader("Content-Type", "text/html");
            res.statusCode = 200;
            console.log(chalk.magenta(parsedBody.text));
            // res.write(`<p style="color:magenta">hello ${parsedBody.first}</p>`);
            res.write(`<title>Send serotonin to: ${parsedBody.text}</title>`);
            res.write(`<a href="/" style="color:cyan">${parsedBody.text}</a>`);
            return res.end();
        });
    }
});
server.listen(8080, () => console.log(`colcon server listening 🍔`));
