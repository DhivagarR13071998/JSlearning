// OBJECTS

var customer = {

    firstname: 'Dhiva',
    lastname: "Ravi",
    cars:["Audi", "BMW","Tesla"]
}

console.log(customer)

//Dot notation
customer.firstname="Ragul"
//Bracket notation 
customer['lastname']='sasi'
console.log(`${customer.firstname} ${customer.lastname}`)


// Arrays 
var car =["Audi", "BMW","Tesla"]
car[1] = "Benz"
console.log(car)
console.log(customer.cars[0])

