let message = "benr" //keyword to declare a variable
console.log(message)//to display value of variable in terminal or we can say console.log will debug your message
console.log(typeof message)// console.log(message, typeof message)

//We can use same variable name for different types of element
message = 123
console.log(message, typeof message)


//We can combine types of elements such str num
let str = "BENR"
let num = 3523
let course = str + num
console.log(course, typeof course)

//We can convert str to int to add. or else it will produce 11 
let str1 = "1"
let num1 = 1
let total = parseInt(str1) + num1
console.log(total, typeof total)//We can convert str to int to add. or else it will produce 11 

let str2 = "1.25"//float
let num2 = 1
let total2 = parseFloat(str2) + num2
console.log(total2, typeof total2)

//To print an element in an array
let data = ["benr", 3523, true]
console.log(data[0])
console.log(data[1])
console.log(data[2])
console.log(data[3])


//To print a key value of an element in an object
let user = {
    name: "Navinkumar",
    age: 50,
    faculty: "FTKEE"
}

console.log(user.name)
console.log(user.age)
console.log(user.faculty)

//To print particular element from an list of object
let messages = [
{   name: "usr1", 
    date: "01/04/2023",
    msg: "good video", 
    like: 1000
},
{   name: "usr2", 
    date: "02/04/2023",
    msg: "very good video", 
    like: 3000
},
]
console.log(messages[1].msg) // >>very good video