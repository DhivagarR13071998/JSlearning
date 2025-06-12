// OBJECTS
// An object is a collection of key-value pairs. It can store multiple values in a single variable using properties.
var customer = {
    firstname: 'Dhiva',             // 'firstname' is a key with value 'Dhiva'
    lastname: "Ravi",               // 'lastname' is a key with value 'Ravi'
    cars:["Audi", "BMW","Tesla"]    // 'cars' is a key with an array value
}

// Print the object to console
console.log(customer)

// Dot notation: Used to access or update object properties using a dot (.)
customer.firstname = "Ragul"

// Bracket notation: Another way to access or update object properties using square brackets and the property name as a string
customer['lastname'] = 'sasi'

// Print updated name using template literals (backticks and ${} to embed variables)
console.log(`${customer.firstname} ${customer.lastname}`)


// ARRAYS
// An array is a list-like object used to store multiple values in a single variable
var car = ["Audi", "BMW", "Tesla"]

// Update the second value (index 1) in the array
car[1] = "Benz"

// Print the modified array
console.log(car)

// Access and print the first element (index 0) of the 'cars' array inside the 'customer' object
console.log(customer.cars[0])

