// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// one dollar is
let OneDollarIs ={
    "JPY": 138.7, // japan yen
}

//One pound is
let OneYanIs = {
    "GBP": 0.0062, // british pounds
}


// we declare the function with the exact name "fromDollarToYen"
const fromDollarToYen = function(valueInDollar){
    // convert the given valueInDollar to euros
    let valueInEuro = valueInDollar / 1.2;
    // convert the euros to japanese yan 
    const yen = valueInEuro * 127.9;
    //round the number
    let roundedYen =  yen.toFixed(2);
    //convert de input into a number output
    let numberYen = parseFloat(roundedYen) ;
    //return the YEN value
    return numberYen;
}

// we declare the function with the exact name "fromYenToPound"
const fromYenToPound = function(valueInYen){
    // convert the given valueInYen to euros (result = 36.74745895)
    let valueInEuro = valueInYen / 127.9;
    // convert the euros to british pounds. 36.74745895 * 0.8
    const pounds = valueInEuro * 0.8;
    //round the number
    let roundedPounds = pounds.toFixed(2);
    //convert de input into a number output
    let numberPound = parseFloat(roundedPounds) ;
    //return the YEN value
    return numberPound;
}



// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}


// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum , fromEuroToDollar, fromDollarToYen, fromYenToPound};