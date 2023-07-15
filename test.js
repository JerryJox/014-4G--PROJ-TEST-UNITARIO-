test("One dollar should be 373.04 yens", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3.5)).toBe(373.04166666666674); 
})

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One yen should be 0.8 pounds", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
  
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(3.5)).toBe(0.0218921032056294);
})
