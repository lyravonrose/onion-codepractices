// function fn() {
//     let a;
//     if (true) {
//         let a = 100;
//         console.log(a);
//     }
//     console.log(a);
// }
// fn();

// // const a = 1;

// let y = 100;
// const x = y;
// y = 10;
// console.log(x, y);

// const name = `Leornardo di`;
// console.log(name);
// const msg = `I "<3" ${name}`;
// console.log(msg);

// const exclaim = (str) => {
//     return str.toUpperCase() + "!!!";
// };
// console.log(exclaim("toga party"));

// function reversedArr() {
//     const arr = ["fruits", "candy", "love"];
//     return arr.reverse();
// }
// console.log(reversedArr("fruits", "candy", "love"));

// const reversedArr = () => {
//     const arr = ["fruits", "candy", "love"];
//     return arr.reverse();
// };
// console.log(reversedArr());

// const reversedArr = () => {
//     const arr = ["fruits", "candy", "love"];
//     return arr.reverse();
// };

// console.log(reversedArr());
// ---------------------------------------//
const reversedArr = (arr) => arr.reverse();

reversedArr(["fruits", "love", "candy"]);
/////////////////////////////////////////////
// class Rectangle {
//     constructor(w, h) {
//         this.width = w;
//         this.height = h;
//     }
//     getArea() {
//         return this.width * this.height;
//     }
//     // static isRectangle(arg) {
//     //     return arg instanceof Rectangle;
//     // }
// }
// // console.log(new Rectangle(2, 3), isRectangle);
// class Square extends Rectangle {
//     constructor(n) {
//         super(n, n);
//     }
// }
// console.log(new Square(5).getArea());
// ///////////////////////////////
// const arr = [10, 20, 30];

// // const [a, ...funkyChicken] = arr;

// // console.log(a, funkyChicken);

// const [a, b] = arr;
// let newArr = [0, 5, ...arr, 40, 50];

// console.log(newArr);
// console.log(arr);
const mergedArr = (arr1, arr2) => {
    return [...arr1, ...arr2];
};

console.log(mergedArr([1, 2, 3], ["chocolate", "guava juice", "penguin"]));

/////////////////
function logInfo(city) {
    const { name, country, population: numPeople } = city;

    console.log(
        `${name} is in ${country} and has ${numPeople} inhabitants in it.`
    );
}

logInfo({ name: "Marseille", country: "France", population: 861635 });
