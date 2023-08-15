'use strict';

var square = function square(x) {
    return x * x;
};

// With es5 we can use the name name instead const
// function square (x) {
//     return x * x;
// };


// const squareArrow = (x) => {
//     return x * x;
// };

//arrow function

// const squareArrow = (x) => x * x;


// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// };

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstName('Sikander Ali'));
