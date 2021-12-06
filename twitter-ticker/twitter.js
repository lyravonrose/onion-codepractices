// this is where all the magic happens
const secrets = require("./secrets");
// this is a great place to destructure if you want:
// const { key, Secret } = require("./secrets");
console.log("secrets", secrets);

const https = require("https");

module.exports.getToken = function getToken(callbackGetToken) {
    //this function will obtain a so called bearerToken from Twitter
    // here are my credentials
    const creds = `${secrets.Key}:${secrets.Secret}`;
    console.log("creds:", creds);
    // let's encode our credentials so that we can send them along
    // twitter wants them to be base64 encoded
    const encodedCreds = Buffer.from(creds).toString("base64");

    console.log("need to go get myself a token");
    const options = {
        host: "api.twitter.com",
        path: "/oauth2/token",
        method: "POST",
        headers: {
            Authorization: `Basic ${encodedCreds}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    };
    //this is the function that will run when twitter API answers our request!
    function reqCallback(response) {
        if (response.statusCode != 200) {
            //this means sth went wrong with our authentication to the twitter API
            callbackGetToken(response.statusCode);
            console.log("response.statusCode", response.statusCode);
        }
        // if we make it here we have a token to obtain
        let body = "",
        response.on("data", (chunk) => {
            body += chunk;
        });
        
        response.on("end",()=>{
const parsedBody= JSON.parse(body);
callbackGetToken(null, parsedBody.access_token);
        });
    }
    const req = https.request(options, reqCallback);
    req.end("grant_type=client_credentials");
};
module.exports.getTweets = function getTweets(bearerToken, callbackGetTweets) {
    // this function gets the tweets from Twitter API
    //this will be for you to compelete
    //Make the request to get tweets GET statuses/user_timeline
        const options = {
        host: "api.twitter.com",
        path: "/1.1/statuses/user_timeline.json?screen_name=TheOnion&tweet_mode=extended",
        method: "GET",
        headers: {
            Authorization: `Bearer ${bearerToken}`
        }
    };

// There must be no content type header
// The response you will receive, will be an array of ginormous objects (each representing one tweet and a whole lot of information about said tweet!)
// The full_text property of these objects, contains the text value of the tweet
// Each tweet object has a property named entities. It's an object that has a property named urls. That's an array of objects representing each url in the tweet
    console.log(`getTweets() running:
    we have the token: ${bearerToken}
    time to get some tweets`);
};
module.exports.filterTweets = function filterTweets(tweets) {
    // this function will filter/clean up the response we received from Twitter
    // and narrows down that data to what our client side actually needs (i.e. only an href and the linktext!)
    //this is also for you to complete
    console.log(`filterTweets() running:
    we have the tweets: ${tweets}
    time to format this data`);
};
