'use strict';

//simple example of the is/else
if(4 == 9) {
    console.log('Ok!');
} else {
    console.log('No!');
}


//simple example of the if/else if/else
const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('To big ammount');
} else {
    console.log('Ok');
}

//ternary condition operator
(num === 50) ? console.log('Ok!') : console.log('Error');

//switch condition. Switch condition compare only strict
const nume = 50;

switch(nume) {
    case 49:
        console.log('Not true');
        break;
    case 51:
        console.log('Not true');
        break;
    case 50:
        console.log('Success!');
        break;
    default:
        console.log('Not today!');
        break;
}

