function sayMyName(){
    console.log("sanket");
}
// sayMyName()

function addTwoNumber(num1 , num2){//parameter
    console.log(num1 + num2);
}
// addTwoNumber(4,2)//arguments

function loginUser(username) {
    if(!username){
        console.log("error");
    }else{
        console.log(`${username} is login`);
    }
}

console.log(loginUser(""));