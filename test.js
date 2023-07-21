//import the function sum from the app.js file
const {sum, fromDollarToYen, fromYenToPound} = require('./app.js');

//start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);
    //we expect the sum of those numbers to be 23
    expect(total).toBe(23);
})

//the second test fromEuroToDollar
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const{fromEuroToDollar} = require('./app.js')
    //use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5)
    //if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2;
    //this is the comparison for the unit test
    expect(fromEuroToDollar(3.5)).toBe(4.2);//1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

//test fromDollarToYen
test("One dollar should be 106.58 yen", function(){
    //import the function from app.js
    const{fromDollarToYen} = require('./app.js')
    //use the function like its supposed to be used
    const yen = fromDollarToYen(3.5)
    //if 1 euro are 1.2 dollars, then 3.5 dollar should be (3.5 / 1.2) = 2.916 euros
    //and 1 euro are 127.9 yen, then 2.916 euros should be 127.9*(3.5/1.2) yen
    const expected = 127.9*(3.5/1.2);
    expect(fromDollarToYen(3.5)).toBe(expected);
    }
)

//test fromYenToPound
test("One yen should be 0.0062 pound", function(){
    const{fromYenToPound} = require('./app.js')
    const pound = fromYenToPound(3.5)
    const expected = 0.8*(3.5/127.9);
    expect(fromYenToPound(3.5)).toBe(expected);
})