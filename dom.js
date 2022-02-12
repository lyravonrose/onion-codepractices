// <script src="script.js"></script> on html at the end in side of last </body> tag

//selecting single DOM nodes
//by ID
var fav = document.getElementById("favourite");
console.log("fav:", fav);

//qeurySelector
var mainHeading = document.querySelector("h1"); //#title
console.log("mainHeading: ", mainHeading);

// selecting multiple elements out of the DOM
var allMyLis = document.querySelectorAll("li");
console.log(allMyLis[0]);

// by ClassName
var allMyListHTMLcollection = document.getElementsByClassName("list-item");
console.log(allMyListHTMLcollection);

//by TagName
var allMyH2s = document.getElementsByTagName("h2");
console.log(allMyH2s);

//returns a single DOM node
// getElementById
// querySelector
//returns array & html collection
//the rest

setTimeout(function () {
    mainHeading.style.backgroundColor = "orange";
    mainHeading.style.marginLeft = 300 + "px";
    mainHeading.style.border = "3px dotted papayawhip";
    console.log("mainHeading.style:", mainHeading.style);
}, 2000);

for (var i = 0; i < allMyLis.length; i++) {
    if (i % 2 === 0) {
        allMyLis[i].style.backgroundColor = "fuchsia";
    } else {
        allMyLis[i].style.backgroundColor = "aqua";
    }
}

//adding classList
allMyLis[0].classList.add("first");
console.log(allMyLis[0].classList);

// adding Elements
//1st: create the html elem
var newCutie = document.createElement("li");
var text = document.createTextNode("Cat Koala");

//2nd: let the elem know which text it should contain
newCutie.appendChild(text);

//3rd: add the element to the palce in the DOM you want to add it
document.querySelector("ul").appendChild(newCutie);
//console.log("Added a newCutie :D");
//readding value to allMyLis to reselect all elems
allMyLis = document.querySelectorAll("li");
//console.log("Node list length after adding:", allMYLis);
//console.log(
//     "HTML COLLECTION list length after adding:",
//     allMYLisHTML collection
// );

//Removing Elements
//1st: get the element you want to remove
var removeFav = document.getElementById("favorite");

//2nd: understand who is the parent of the elem we want to remove
var parent = removeFav.parentNode;

//3rd: tell the parent to remove the child
parent.removeChild(removeFav);
