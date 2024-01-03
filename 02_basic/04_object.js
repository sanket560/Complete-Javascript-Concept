// const tinderUser = new Object() // singleton object
// const tinderUser = {} // non singleton object
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sanket"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email:"someone#gmail.com",
    fullname:{
        userfullName:{
            firstname:"sanket",
            lastname:"mane"
        }
    }
}

// console.log(regularUser.fullname.userfullName.firstname);

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"a",
    4:"b"
}

// merging object
// using assign 
// const obj3 = Object.assign(obj1,obj2)
//using spread
const obj3 = {...obj1,...obj2}
console.log(obj3);