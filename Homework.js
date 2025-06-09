// Q: Declare variables for your name, age, marital status, and number of pets you have. Log them to the console.
var Name  = "Dhivagar R"
var age = "26"
var isDhivamarried = false
var ishehavepets = null

console.log("MY Name is "+Name)
console.log("My Age is " +age)


//Q: Write a program that declares a variable price and itemName, and then displays a message:
//"The price of a {itemName} is {price} Rupees."
//(Use concatenation like you did before.)
var itemName = "cup"
var price = 50 
var message = "The price of a " +itemName+" is "+price+ " Rupees."
console.log(message)

//📌 3️⃣ String Interpolation (Template Literals)
//Q: Rewrite the previous problem using template literals (backticks and ${} syntax).
var message2 = `The price of a ${itemName} is ${price} Rupees.`
console.log(message2)

//📌 4️⃣ Constant Behavior
//Q: Create a constant variable country and assign it a value. Then try to reassign a new value and observe the error in the console.

//const country ="india"
//country = "australia"
//console.log(country)

//📌 7️⃣ User Details Message
//Q: Create a program with variables: name, age, gender, and occupation. Use string interpolation to print a sentence like:

//"Hi, I’m Dhivagar, a 25-year-old Male working as a QA Engineer."

var cname ="Dhivagar"
var Dage = 25
var gender = "male"
var occupation = "QA Engineer"
var message3 = `Hi, I'm ${cname}, a ${Dage}-year-old ${gender} working as a ${occupation}`
console.log(message3)

// Example 1 

var car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020
}

console.log(car);

// Dot notation
// your code here
car.model = 'Glanza'

// Bracket notation
// your code here
car['year']= 2021
// Final console log
// your code here

console.log(`My car is a ${car.year} ${car.brand} ${car.model}`)

// Example 2:
// Create a book object with the following properties:

// title

// author

// year

// ✅ Then:

// Print the book object.

// Update the title using dot notation

// Update the year using bracket notation

// Print: "The book [title] by [author] was published in [year]"

var book = {
    title:"The Alchemist",
    author:'Paulo Coelho',
    year:1988
}

//Dot notation 
book.title='To Kill a Mockingbird'

//Bracket notation
book['year'] = 2020

console.log(`The book ${book.title} by ${book.author} was published in ${book.year}`)

// Example 3:
// Create a nested object called employee:

// name

// jobTitle

// address

// city

// pincode

// ✅ Then:

// Print the address object.

// Update the pincode using dot notation

//Print: "[name] works as a [jobTitle] in [city], and the office pincode is [pincode]"

var student = {
    name:"Dhivagar",
    jobTitle:"Associate Product Tester",
    address:'469/E Mullainagar Chengam',
    city:'chengam',
    pincode:606702,
}

// Update the pincode using dot notation
student.pincode = 60701
//Print: "[name] works as a [jobTitle] in [city], and the office pincode is [pincode]"
console.log(`${student.name} works as a ${student.jobTitle} in ${student.city} and the office pincode is ${student.pincode}`)

// Example 4:
// Create an object called laptop with the following properties:

// brand

// model

// price

// ✅ Then:

// Print the laptop object.

// Update the model using dot notation

// Update the price using bracket notation

// Print: "The [brand] laptop model is [model] and it costs [price]"


var laptop = {
    brand:'Dell',
    model:'Latutude5410',
    price:"1 Lakhs"
}
// Update the price using bracket notation
laptop['price']='2 Lakhs'

console.log(`The ${laptop.brand} laptop model is ${laptop.model} and it costs ${laptop.price}`)


// Arrays 
var car =["Audi", "BMW","Tesla"]
car[1] = "Benz"
console.log(car)

// ✅ Example 1:
// Create an object called mobile with:

// brand

// model

// feature (an array with 3 strings)

// Then:

// Print the mobile object.

// Update the model using dot notation

// Update the second feature in the feature array.

// Print: "My mobile is a [brand] [model] with [feature1], [feature2], and [feature3]"

var mobile = {
    brand:"Redmi",
    model:"Note 9 pro max",
    feature:["camera","call","Bluetooth"]
    
}
// Print the mobile object.
console.log(mobile)
// Update the model using dot notation
mobile.model="Xiaomi"

mobile.feature[1]="Games"
console.log(`My mobile is a ${mobile.brand} ${mobile.model} with ${mobile.feature[0]}, ${mobile.feature[1]}, and ${mobile.feature[2]}`)


// ✅ Example 2:
// Create an array fruits with 4 fruits.

// Then:

// Change the 3rd fruit.

// Add a new fruit at the 5th position.

// Print the length of the array.

// Print the first and last fruit.

var fruit =["Apple",'Mango','Banana',"pineapple"]
// Change the 3rd fruit.
fruit[2]='Dragonfruit'
// Add a new fruit at the 5th position.
fruit[4]='Grapes'
// Print the length of the array.
console.log(fruit.length)
// Print the first and last fruit.
console.log(`The first fruit is ${fruit[0]} & Last fruit is ${fruit[4]}`)

// ✅ Example 3:
// Create an object person with:

// name

// age

// hobbies (array with 3 hobbies)

// Then:

// Print the second hobby.

// Update the third hobby.

// Add a new property city to the person object using dot notation.

// Print the final object.

var person ={
    name:'Dhivagar',
    age:23,
    hobbies:['Carrom','books','cricket']
}

// Print the second hobby.
console.log(`The second hobby is ${person.hobbies[1]}`)
// Update the third hobby.
person.hobbies[2]='Golf'
// Add a new property city to the person object using dot notation.
person.city ='chennai'
// Print the final object.
console.log(person)
