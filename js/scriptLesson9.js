"use strict";

//string concatentation
console.log("arr" + " - obj"); //will be string as output
console.log(4 + " - obj"); //will be string as output
console.log(4 + +" - obj"); //will be NaN as output, becasue we've tried to combine the number and string
console.log(4 + +"5"); //will be numeric output

//the "+" which set before argument it's the unary plus

//incriment and decriment
let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

//equality types
//non-strict equality
console.log(2*4 == 8); //will be true, because we compare value
console.log(2*4 == '8'); //will be true, because we compare value

//strict equality
console.log(2*4 === '8'); //will be false, because we compare data types
console.log(2*4 === 8); //will be true, because we compare data types and value