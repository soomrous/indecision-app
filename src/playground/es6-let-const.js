var nameVar = 'Sikander';
var nameVar = 'Raja';
console.log('nameVar', nameVar);

let nameLet = 'Soomro';
nameLet ='Ali';
console.log('nameLet', nameLet);

const nameConst = 'Matli';
console.log('nameConst', nameConst);


// Block Scoping

const fullName = 'Sikander Soomro';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName)