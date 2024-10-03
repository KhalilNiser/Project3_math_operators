// Variable let
// let x = 100 + 50;
// ---- ADDITION ----
function addNumbers()
{
    var value1 = 100;
    var value2 = 50;

    let result = value1 + value2;

    document.getElementById( "math" ).innerHTML = result;

}

// ---- SUBTRACTION ----
function subtractNumbers()
{
    var value1 = 100;
    var value2 = 50;

    let result = value1 - value2;

    document.getElementById( "math" ).innerHTML = result;

}

// ---- MULTIPLICATION ----
function multiplyNumbers()
{
    var value1 = 6;
    var value2 = 8;

    let result = value1 * value2;

    document.getElementById( "math" ).innerHTML = result;

}


// ---- DIVISION ----
function divideNumbers()
{
    var value1 = 48;
    var value2 = 6;

    let result = value1 / value2;

    document.getElementById( "math" ).innerHTML = result;

}


/* ---- ARITHMETIC_OPERATION: This function adds, subtracts,
multiplies, and divides all at once---- 
*/
function arithmeticOperation()
{
    let value1 = 2;
    let value2 = 7;
    let value3 = 10;
    let value4 = 5;
    
    let result = ( ( value1 + value2 ) * value3 / value1 - value4 );

    document.getElementById( "math" ).innerHTML = "(2 + 7 ) "
    + "* 10 / 2 - 5 = " + result;
}


// ---- MODULUS_OPERATOR ----
function modulusOperator()
{
    let value1 = 25;
    let value2 = 6;

    let result = value1 % value2;

    document.getElementById( "math" ).innerHTML = "When you divide "
    + value1 + " by " + value2 + " You will get a remainder of: " 
    + result;
}

/*              ---- UNARY_OPERATOR ----          
                ---- NEGATION_OPERATOR ----
There is a "unary operator" called a "negation operator". 
This returns the opposite. Meaning if the unary is a positive
form, it will return a negative and visa versa 
*/
function negationOperator() 
{
    let value = 10;

    document.getElementById( "math" ).innerHTML = -value;
}

//              ---- INCREMENT_OPERATOR ----
function incrementOperator()
{
    let value = 5;

    value++;

    document.getElementById( "math" ).innerHTML = value;
}

//              ---- INCREMENT_OPERATOR ----
function decrementOperator()
{
    let value = 5.25;

    value--;

    document.getElementById( "math" ).innerHTML = value;
}

//              ---- Function Displays: RANDOM_NUMBERS: 1 - 100 ----
function getRandomInt( min, max )
{
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}




