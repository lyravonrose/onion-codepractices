const countries = require("./countries");

test("When find is passed an empty string, it returns an empty array", () => {
    expect(countries.find("")).toEqual([]);
});
test("An array that finds no more than four matches", () => {
    expect(countries.find().length).toBeLessThanOrEqual(4);
});
test("is the search case insensitive", () => {
    expect(countries.find("germany")[0]).toBe("Germany");
});
test("Empty array for no matching countries", () => {
    expect(countries.find("oilkjgh")).toEqual([]);
});
