"use strict";

const category = "toys";

//deprecated method of string concatenation
console.log("https://someurl.com/" + category + "/" + 4);

//interpolation method of the string concatenation
console.log(`https://someurl.com/${category}/5`);

//example of interpolation using
const user = "Ivan";
alert(`Hello, ${user}`);