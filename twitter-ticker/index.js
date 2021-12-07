const express = require("express");
//const twitter = require("./twitter")
const { getToken, getTweets, filterTweets } = require("./twitter");
const app = express();

app.use(express.static("./ticker"));
app.get("/", (req, res) => {
    getToken()
        .then((token) => {
            //     const tweetPromises = [getTweets(token, "bbcworld"),
            // getTweets(token, "nytimes"),
            // getTweets(token, "newyorker")];
            // return Promise.all(tweetPromises);

            return Promise.all([
                getTweets(token, "bbcworld"),
                getTweets(token, "nytimes"),
                getTweets(token, "newyorker"),
            ]);
        })
        .then((allTheTweets) => {
            console.log("allTheTweets", allTheTweets);
            const bbcTweets = allTheTweets[0];
            const nytimesTweets = allTheTweets[1];
            const newyorkerTweets = allTheTweets[2];

            const mergedTweets = [
                ...bbcTweets,
                ...nytimesTweets,
                ...newyorkerTweets,
            ];
            //sort our tweets in reverse chronogical order
            mergedTweets.sort((a, b) => {
                return new Date(b.created_at) - new Date(a.created_at);
            });
            const tweetsFiltered = filterTweets(mergedTweets);
            res.json(tweetsFiltered);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});
// app.get("/ticker.json", (req, res) => {
//     console.log("client requested ticker.json");
//     // ultimately there are 4 things now, that we want to do
//     //1. get the token. when we have the token
//     getToken((err, bearerToken) => {
//         // console.log("token in getToken() index.js:", bearerToken);
//         if (err) {
//             //sth went wrong with obtaining the token
//             return res.sendStatus(500);
//         }
//         //2. make a request for the tweets using the token. When we have the tweets
//         getTweets(bearerToken, (err, tweets) => {
//             if (err) {
//                 //sth went wrong with getting of tweets
//                 console.log("err in getTweets:", err);
//                 return res.sendStatus(500);
//             }
//             //if we make it here, we successfuly obtained tweets
//             //3. filter the tweets from step 2
//             const filteredTweets = filterTweets(tweets);
//             //filteredTweets should look like our data.json file that contained the hard coded headlines
//             //4. send back the filtered tweets(they should look the way you data.json is formatted right now)
//             res.json(filteredTweets);
//         });
//     });
// });
app.listen(8080, console.log("Twitter API project running 🌭"));
