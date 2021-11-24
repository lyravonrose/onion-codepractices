//Ex .1//
const reversedArr = (arr) => arr.reverse();

reversedArr(["fruits", "love", "candy"]);

//Ex . 2//

const mergedArr = (arr1, arr2) => {
    return [...arr1, ...arr2];
};

console.log(mergedArr([1, 2, 3], ["chocolate", "guava juice", "penguin"]));

//Ex . 3//
function logInfo(city) {
    const { name, country, population: numPeople } = city;

    console.log(
        `${name} is in ${country} and has ${numPeople} inhabitants in it.`
    );
}

logInfo({ name: "Marseille", country: "France", population: 861635 });
