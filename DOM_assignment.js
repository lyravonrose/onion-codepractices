//Ex. 1
// Write a function that expects a string representing a selector to be passed as a parameter. The function should find all the elements in the document that match the selector and change their style so that the text they contain is italic, underlined, and bold.

function changeStyle(selector) {
    var elems = document.querySelectorAll(selector);
    for (var i = 0; i < elems.length; i++) {
        elems[i].style.fontStyle = "italic";
        elems[i].style.textDecoration = "underline";
        elems[i].style.fontWeight = "bold";
    }
}
console.log(changeStyle("h2"));

//Ex.2 Write a function that expects a string representing a class name to be passed as a parameter. The function should return an array containing all the elements in the document that have the class that was passed in.

var classElems = function getClassArray(className) {
    var array = [];
    var classes = document.getElementsByClassName(className);
    for (var i = 0; i < classes.length; i++) {
        return array;
    }
};

console.log(classElems("list-item"));

//Ex. 3
// Write a function that inserts an element into the body of the currently loaded page. That element should have fixed position, z-index of 2147483647, left of 20px, top of 100px, font-size of 200px, and contain the text 'AWESOME'.

// var loaded = document.body.onload; ?

function createElements() {
    var elem = document.createElement("h4");
    elem.style.position = "fixed";
    elem.style.zIndex = "2147483647";
    elem.style.left = "20px";
    elem.style.top = "100px";
    elem.style.fontSize = "200px";
    text = document.createTextNode("AWESOME");
    document.body.appendChild(elem);
}

console.log(createElements());
