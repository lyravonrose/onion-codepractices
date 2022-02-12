const { TestWatcher } = require("@jest/core");
const headlines = require("./headlines");
const twApi = require("./twApi");

jest.mock("./twApi");
/* this is basically saying, hey yo jest make a fake copy of the export object of the
module that I passed to you! so copy the object and all it's properties BUT not 
the actual fuctionality */
test("headlines filters out tweets that do not have exactly one link", () => {
    twApi.getTweets.mockResolvedValue([
        {
            entities: {
                urls: [
                    {
                        url: "this will not make it out",
                    },
                    {
                        url: "of the filter because this has two objects in the urls array",
                    },
                ],
            },
            full_text: "this is some full text we'll never see",
        },
        {
            entities: {
                urls: [
                    {
                        url: "www.spiced-academy.com",
                    },
                ],
            },
            full_text: "I love 🥟",
        },
        {
            entities: {
                urls: [],
            },
            full_text: "This will also never make it",
        },
    ]);
    return headlines().then((tweets) => {
        console.log("tweets inside the then of moveHeadlines test", tweets);
        expect(tweets.length).toBe(1);
        expect(tweets[0]).toEqual({
            text: "I love 🥟",
            href: "www.spiced-academy.com",
        });
    });
});
