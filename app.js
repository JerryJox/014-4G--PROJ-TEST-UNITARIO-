// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = valueInDollar * oneEuroIs.JPY;
    // retornamos el valor
    return valueInYen;
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // retornamos el valor
    return valueInDollar;
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromYenToPound = function(valueInYen){
    // convertimos el valor a dolares
    let valueInPound = valueInYen * oneEuroIs.GBP;
    // retornamos el valor
    return valueInPound;
}

// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound }