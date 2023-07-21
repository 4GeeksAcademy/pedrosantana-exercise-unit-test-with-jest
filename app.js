//we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    //convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro*1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInEuro = valueInDollar/1.2;
    let valueInYen = valueInEuro * 127.9;
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInEuro = valueInYen/127.9;
    let valueInPound = valueInEuro * 0.8;
    return valueInPound;
}

//this is my function that sums two numbers
const sum = (a, b) => {
    return a+b;
}
//just a console log for ourselves
console.log(sum(7, 3));
console.log(fromEuroToDollar(3.5));
console.log(fromDollarToYen(3.5));
console.log(fromYenToPound(3.5));
//export the function to be used on other files
//(similar to the keyword 'export' when using webpack)
// we include fromEuroToDollar here as well because it needs to be exported
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};
