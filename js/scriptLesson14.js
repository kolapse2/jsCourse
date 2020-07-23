'use strict';

let num = 50;

//cycle while
while (num < 55) {
    console.log(num);
    num++;
}

let num2 = 50;

//cycle do while
do {
    console.log(num2);
    num2++;
}
while (num2 < 55);

let num3 = 50;

//cycle for
for(let i = 1; i < 8; i++){
    console.log(num3);
    num3++;
}

//how to use break in cycle
for(let i = 1; i < 10; i++){
    if (i == 6){
        break;
    }

    console.log(i);
}

//how to use continue in cycle (to skip particular condition)
for(let i = 1; i < 10; i++){
    if (i == 6){
        continue;
    }

    console.log(i);
}