const { dbl } = require("./dbl");

//dbl returns argument times 2
test("dbl returns argument times 2 when passed a num", () => {
    return dbl(8).then((resVal) => {
        expect(resVal).toBe(16);
    });
});

//dbl returns "bad number cannot double"
test("dbl rejects with 'bad number cannot double' if NaN is passed", () => {
    return dbl("cupcake").catch((err) => {
        expect(err).toBe("bad number cannot double");
    });
});
