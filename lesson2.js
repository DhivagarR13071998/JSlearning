//Concatenation and Interpolation
var price =50;
var item="cup";
var messagetoprint = "The value of the " +item+ " is " +price+ " Rupees"; // concatenation of the string and number using + +
var messagetoprint2 = `The value of the ${item} is ${price} Rupees`; // String Interpolation using the `` and ${}
console.log(messagetoprint);
console.log(messagetoprint2);

var ammount = 90;
var thing ='Toothpaste';
var output1 = "The value of the "+ thing+ " is " + ammount + " Rupees";
var outpur2 = `The value of the ${thing} is ${ammount } Rupees`;
console.log(output1)
console.log(outpur2)