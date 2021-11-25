const readline = require("readline");
const chalk = require("chalk");

const gameInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const story = {
    question: "Hi, do you want to earn 33 million Euros?",
    answers: {
        yes: {
            question: "Do you know the games that South Koreans play?",
            answers: {
                yes: {
                    question:
                        "Are you willing to let us use your organs if you don't win?",
                    answers: {
                        yes: "Brilliant let's play",
                        no: "That's too bad, have a nice day",
                    },
                },
                no: "You aren't qualified then. 🤡",
            },
        },
        no: "Go watch Netflix and let me know when you change your mind 😏🦑",
    },
};

process.on("exit", () => {
    process.exit();
});

function playGame(story) {
    // console.log("storyObject:\t", storyObject);
    gameInterface.question(
        chalk.bgRed(story.question) + "[yes | no]",
        (answer) => {
            if (story.answers[answer] === undefined) {
                console.log(chalk.red("Please cooperate"));
            } else {
                if (typeof story.answers[answer] === "string") {
                    console.log(chalk.cyan(story.answers[answer]));
                    process.emit("exit");
                    //emitting the exit event
                } else {
                    playGame(story.answers[answer]);
                    // console.log(chalk.bgRed(story.answers[answer].question));
                }
            }
            // if(answer === "yes"){
            //     console.log
        }
    );
}
playGame(story);

// gameInterface.question("Wanna Play? [yes | no]", (answer) => {
//     if (answer === "yes") {
//         console.log("yay");
//         gameInterface.close("you know the rules of chess?", (answer)=> {
//             if (answer === "yes"){
//                 console.log("brilliant lets play");
//                 gameInterface.question("whats your first move?", (answer)=> {

//                 }
//             }
//         });
//     } else if (answer === "no") {
//         console.log("we are not friends anymore");
//     } else {
//         console.log("heh I only understand yes or no");
//     }
//     // console.log("answer:\t", answer);
// });
