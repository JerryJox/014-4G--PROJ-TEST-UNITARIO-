test("One dollar should be 127.9 yens", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3.5)).toBe(447.65000000000003); 
})

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
  
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
})

test("One yen should be 0.8 pounds", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
  
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(3.5)).toBe(2.8000000000000003);
})
