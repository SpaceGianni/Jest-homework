// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

//Test from Dollar to Japanese Yen
test(" 1 dollar should be 106.58 japanese yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its supposed to be used
    const dollars2 = fromDollarToYen(50)

    // convert dollars to euro
    const euroConversion = dollars2 / 1.2;

    // if one euro are 1.2 dollars, then 50 dollars should be 41.6666667 euros (50 / 1.2) 
    const expected2 = 50 / 1.2;

   // convert the euros to japanese yan. Yen = 5329.166667 
    const yen = expected2 * 127.9;

    // round the result. Rounded yen = 5329.17
    const roundeYen =  yen.toFixed(2);

    // transform the output into a number result. From "" to Number.
    let numberYen = Number(roundeYen);

    // this is the comparison for the unit test
     expect(fromDollarToYen(50)).toBe(5329.17); // 50 dollars should be 5329.17 japanese yen (rounded)
})

//Test from Japanese Yen to Japanese pound
test(" From yen to pounds", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its supposed to be used
    const yen = fromYenToPound(4700)

    // convert yen to euro
    const euroConversion = yen / 127.9;

    // if one euro are 127.9 japanese yen, then 4700 yen should be 36.74745895 euros (4700 / 127.9) 
    const expected2 = 4700 / 127.9;

   // convert the euros to british pounds.  If one euro are 0.8 pounds, then 36.74745895 euros are 29.39796716 pounds.
    const pounds = expected2 * 0.8;

    // round the result. Rounded pound= 29.4
    const roundedPounds =  pounds.toFixed(2);

    // transform the output into a number result. From "" to Number.
    let numberPounds = Number(roundedPounds);

    // this is the comparison for the unit test
     expect(fromYenToPound (4700)).toBe(29.4); // 4700 japanese yen should be 29.4 british pounds (rounded)
})


