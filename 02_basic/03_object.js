// object can be created by two methods 
// 1 . literals
// 2 . constructor
// singleton : when u create object from constructor makes singleton object

// object literals
const mySymbol = Symbol("key1")
const jsUser = {
    [mySymbol]:"mykey1",
    name: "sanket",
    age:20,
    location:"pune",
    email:"sanket@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","tuesday"]
}
// console.log(jsUser["name"]);
// console.log(jsUser[mySymbol]);
// jsUser.email = "sanket@123"
// Object.freeze(jsUser)
// jsUser.email = "sanket@gmail.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log(`hello js user ${this.name}`);
}
console.log(jsUser.greeting());