module.exports.dbl = function dbl(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(n)) {
                reject("Bad number cannot double");
            } else {
                resolve(n * 2);
            }
        }, 2000);
    });
};
