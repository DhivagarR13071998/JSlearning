//Concatenation and Interpolation
var price =50;
var item="cup";
var messagetoprint = "The value of the " +item+ " is " +price+ " Rupees"; // concatenation of the string and number using + +
var messagetoprint2 = `The value of the ${item} is ${price} Rupees`; // String Interpolation using the `` and ${}
console.log(messagetoprint);
console.log(messagetoprint2);
