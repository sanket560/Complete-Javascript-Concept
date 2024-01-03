const user = {
    username : "sanket",
    price:100,
    welcomeMessage:function(){
        console.log(`${this.username} , welcome to web`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// ******* arrow function **************

// const addNum = (num1,num2) =>{
//     return num1 + num2
// }

// implicit return
const addNum = (num1,num2) => (num1 + num2)

console.log(addNum(3,2));