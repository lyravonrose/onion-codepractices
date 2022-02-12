//PROMISE, asynchronous//

const {
    pendingPromise,
    fulfilledPromised,
    rejectedPromise,
    orderBurger,
    getTaxiHome
    = request("./async-operations.js")
}
//callbacks
orderBurger("chicken", (err, burger)=>{
    console.log("Miam!",burger);
    getTaxiHome("Gneisenstr.", (err, address)=>{
        console.log(address);
    });
});

//Promises
orderBurger("chicken").then((burger)=>{
    console.log("Miam!", burger);
    getTaxiHome("Gneisenstr.").then((address)=>{
        console.log(address);
    });
});


// orderBurger("chicken".then((burger)=>{
// //     console.log("miam", burger);
//     return orderSushis();
// }).then((sushis)=>{
//     console.log("Miam", sushis);
//     return getTaxiHome("gneisenaustr.");
// }).then((address)=>{
//     console.log(address);
// }));

//chaining without nesting
orderBurger("chicken")
.then((burger)=>orderSushis())
.catch(()=>orderBurger("beef"))
.then((sushis)=>getTaxiHome("Gneiseustr."))
.then((address)=>console.log(address))
.catch((err)=>console.log(err));

//Error Handling
orderBurger("beef")
.then((burger)=>{console.log("Miam!", burger)})
.catch((err)=>{console.log(err)});

//??
orderBurger(("beef").finally((err)=>console.log(err)));
//??

const promise = new Promise((resolve, reject)=>{
    resolve(42);
    reject(new Error("Oups"));
});

//Create your own promises
const wait = (milliseconds) => {
    return new Promise((resolve, reject)=>{
setTimeout(()=> resolve(), milliseconds);
    });
};

wait(3000).then(()=>
    console.log("yeah the wait is over"));
//

const waitingPromise = wait(7000);
console.log("waitingPromise:\t", waitingPromise);

waitingPromise
.then(()=>{
    console.log("yeah the wait is over");
}).catch((err))

function readdirPromisified(directoryPath){
    return new Promise((resolve, reject)=>{
        readdirPromisified(directoryPath, (err, directory)=>{

            if (err) {
                reject(err);
            } else{
                resolve(directory);
            }
        });
    })
}

const {orderbBurger, orderSushis,getTaxiHome,} = require("./async-operations.js")

Promise.all([orderbBurger("Chicken"), orderSushis()]).then((results)=>{
        console.log(results);
        return getTaxiHome("Gneisneaustr.");
    })
    .then((address)=>console.log(address)).catch((err)=>{});