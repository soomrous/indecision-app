//arguments object - no longer bound with arrow functions

const add = (a, b) =>{
    // console.log(arguments)
    return a + b;
};

console.log(add(2, 3, 2002));


// this keyword - no longer bound

const user = {
    name: 'Sikander',
    cities: ['Winston Salem', 'Tampa', 'Pittsbourgh'],
   
    //printPlacesLived: function () { old function
    printPlacesLived() { // new sytx
        return this.cities.map((city) => this.name + ' has lived in ' + city);

        // console.log(this.name); these are failing because of undefined arrguments
        // console.log(this.cities);

        // workaround when you can not use the cost in the other function
        //const that = this;

        // this.cities.forEach((test) => {
        //     console.log(this.name + ' has lived in ' + test);
        // });
    }
};
console.log(user.printPlacesLived());

// Challenge area

const multiplier = {

    //numbers - array of numbers
    numbers: [1, 2, 3],
    multiplyBy: 2,

    multiply () {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
    
}

console.log(multiplier.multiply());