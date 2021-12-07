// this is where all the magic happens
const secrets = require("./secrets");
// this is a great place to destructure if you want:
// const { key, Secret } = require("./secrets");
console.log("secrets", secrets);

const https = require("https");

module.exports.getToken = function getToken() {
    //this function will obtain a so called bearerToken from Twitter
    // here are my credentials
    return new Promise((resolve, reject) => {
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
                "Content-Type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
            },
        };

        //this is the function that will run when twitter API answers our request!
        function reqCallback(response) {
            if (response.statusCode != 200) {
                //this means sth went wrong with our authentication to the twitter API
                reject(response.statusCode);
                // console.log("response.statusCode", response.statusCode);
            }

            // if we make it here we have a token to obtain
            let body = "";
            response.on("data", (chunk) => {
                body += chunk;
            });

            response.on("end", () => {
                const parsedBody = JSON.parse(body);
                resolve(parsedBody.access_token);
            });
        }
        const req = https.request(options, reqCallback);
        req.end("grant_type=client_credentials");
    });
};

module.exports.getTweets = function (bearerToken, tweetSource) {
    return new Promise((resolve, reject) => {
        // this function gets the tweets from Twitter API
        // Make the request to get tweets GET statuses/user_timeline
        console.log(`getTweets() running:
    we have the token: ${bearerToken}
    time to get some tweets ${tweetSource}`);

        const options = {
            host: "api.twitter.com",
            path: `/1.1/statuses/user_timeline.json?screen_name=${tweetSource}&tweet_mode=extended`,
            method: "GET",
            headers: {
                Authorization: `Bearer ${bearerToken}`,
            },
        };
        function reqCallback(response) {
            if (response.statusCode != 200) {
                //this means sth went wrong with our authentication to the twitter API
                reject(response.statusCode);
                // console.log("response.statusCode", response.statusCode);
            }
            // if we make it here we have a token to obtain
            let body = "";
            response.on("data", (chunk) => {
                body += chunk;
            });

            response.on("end", () => {
                const parsedBody = JSON.parse(body);
                resolve(parsedBody);
            });
        }
        const req = https.request(options, reqCallback);
        req.end();
    });
};

module.exports.filterTweets = function (tweets) {
    // this function will filter/clean up the response we received from Twitter
    // and narrows down that data to what our client side actually needs (i.e. only an href and the linktext!)
    console.log(`filterTweets() running:
    we have the tweets: ${tweets}
    time to format this data`);
    let result = [];

    for (var i = 0; i < tweets.length; i++) {
        if (tweets[i].entities.urls.length === 1) {
            let tweet = {
                text: tweets[i].full_text.replace(
                    tweets[i].entities.urls[0].url
                ),
                url: tweets[i].entities.urls[0].url,
            };
            result.push(tweet);
        }
    }
    console.log(result);
    return result;
};
