const http = require("http");

const PORT = 8080;

const server = http.createServer(function (request, response) {
    // setup minimal error handling for both request and response
    request.on("error", (err) => console.log("err in request", err));
    response.on("error", (err) => console.log("err in response", err));
    //let's make our server do sth
    //let's understand our request a bit better
    console.log("___________");
    console.log("request.url:", request.url);
    // bit more meta information on our request
    console.log("___________");
    console.log("request.headers:", request.headers);
    // console.log("request.headers:", request.headers);
    // request method
    console.log("___________");
    console.log("request.method:", request.method);

    //on the request object
    //#1 the requested url -> which page does the user want to see
    //#2 the headers: they are basically like meta informtation on the request, little notes that the browser sends over
    //#3 the mothod: usually indicative of what type of action the request should trigger

    // sending a response
    // #1 set headers, aka indicate to the browser what type of content they would receive
    response.setHeader("Content-Type", "text/html");
    // // #2 set a status code
    response.statusCode = 200; // everything went okay!
    // // #3 writing our response
    response.write("<!doctype html>");
    response.write(`<title>${new Date()}</title>`);
    response.write(
        "<h1> you requested some content, so here you have an h1 :D</h1>"
    );
    // // #4 end our response
    response.end();

    if (request.method === "GET") {
        if (request.url === "/secret") {
            console.log("User wants to know Secrets 😏");
            response.statusCode = 302;
            response.setHeader("Location", "/go-somwehere-else");
            response.end();
        }
        response.statusCode = 200;
        response.setHeader("x-powered-by", "fizzyCandy");
        response.end(
            `<h1>I respond to GET requests </h1><p>gotta get some!</p>`
        );
    } else if (request.method === "PUT") {
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html");
        response.end("<h1>PUT PUT PUT 🥟</h1>");
    } else if (request.method === "POST") {
        let data = "";
        //listen to incoming data chunks of my post request
        request.on("data", (chunk) => {
            console.log("chunk:", chunk);
            data += chunk;
        });
        //to understand when all data was sent
        request.on("end", () => {
            console.log("body:", body);
            response.setHeader("Content-Type", "text/html");
            response.statusCode = 200;
            response.end("<h1>all received successfully thanks </h1>");
        });
    }
});

// listen accepts two arguments: 1st a port to listen on, 2nd a callback function
// to run, when the server successfully spins up and listens
server.listen(PORT, () => console.log(`hola it's Lyra: ${PORT}✨`));
