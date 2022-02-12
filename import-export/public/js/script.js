// #1 import variables and functions from one module
import { count, increment } from "./modules.js";
console.log("count:", count);
increment(); // calling our imported function
increment();
increment();
// count++;//script.js:10 Uncaught TypeError: Assignment to constant variable.
// 👆 this does not work, things we import are imported as consts, this
// ensures a variables integrity
console.log("count after increment", count);

//#1a import variables and functions from another module and rename them
import { count, increment as countUp } from "./modules.js";
console.log("count:", count);
countUp(); //caliing our imported and renamed function
countUp();
countUp();

// #2 import all from one module
import * as counter from "./modules.js";
console.log("counter.count:", counter.count);
counter.increment();
console.log("counter.count after increment:", counter.count);

// #3 import default exported without curlies!
// anything NOT default needs curlies

import increment, { count } from "./modules.js";
increment();
increment();
console.log("count:", count);
