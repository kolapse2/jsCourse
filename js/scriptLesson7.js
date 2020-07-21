"use strict";

//message to user
alert("Hello");

//message to user with yes/no option, the result will be tracked, according to option user choose.
const result = confirm("Are you here?");
console.log(result);

//message to user with field to answer
const answer = prompt("Are you 18?", "");
console.log(answer);
//to check the type of the data
console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt("What is your name?", "");
// answers[1] = prompt("How old are you?", "");
// answers[2] = prompt("What is your gender?", "");

// document.write(answers);