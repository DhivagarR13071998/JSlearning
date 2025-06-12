// Concatenation and Interpolation

var price = 50;
var item = "cup";

// Concatenation: Combining strings and variables using + operator
var messagetoprint = "The value of the " + item + " is " + price + " Rupees";

// Interpolation: Using backticks (``) and ${} to embed variables inside a string (also called template literals)
var messagetoprint2 = `The value of the ${item} is ${price} Rupees`;

// Print both messages
console.log(messagetoprint);
console.log(messagetoprint2);


// Another Example:
var ammount = 90;
var thing = 'Toothpaste';

// Concatenation
var output1 = "The value of the " + thing + " is " + ammount + " Rupees";

// Interpolation
var output2 = `The value of the ${thing} is ${ammount} Rupees`;

// Print both messages
console.log(output1);
console.log(output2);
