function sayMyName(){
    console.log("sanket");
}
// sayMyName()

function addTwoNumber(num1 , num2){//parameter
    console.log(num1 + num2);
}
// addTwoNumber(4,2)//arguments

// function loginUser(username) {
//     if(!username){
//         console.log("error");
//     }else{
//         console.log(`${username} is login`);
//     }
// }

// console.log(loginUser(""));

// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(10,30,20));

const user = {
    username : "sanket",
    age : 20
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
}

handleObject(user)