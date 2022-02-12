// #1 demo export
let count = 0;
function increment() {
    console.log("incrementing count in the modules file");
    count++;
}

// all in one line
export { count, increment };

// #2 demo export:
//export line by line

export let count = 0;

export function increment() {
    console.logv("incrementing count in the modules file");
    count++;
}

//#3 demo export:
//one thing as default

export let count = 0;
export default function increment() {
    console.log("incrementing count in the modules file");
    count++;
}
