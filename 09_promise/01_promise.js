// creating promise
const promiseOne = new Promise(function(resolve,reject){
    //do an async task
    // db calls , cryptography , netowork call

    // async task
    setTimeout(() => {
        console.log('async task is complete');
        // connect resolve and .then
        resolve()
    }, 1000);
})

promiseOne.then(()=>{ // .then is connected with resolve
    console.log("promise consume");
})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("async task two");
        resolve()
    }, 1000);
}).then(()=>{
    console.log("async 2 resolved");
})

const promiseThree =  new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({username:"sanket" , email:"sanket@gmail.com" })
    }, 1000);
})
promiseThree.then((user)=>{
    console.log(user);
})

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({username:"sanket",password:123})
        }else{
            reject('error')
        }
    }, 1000);
})
promiseFour.then((user)=>{
    return user.username
}).then((username)=>{ // chaining sending data from one to other
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("the promise is either resolved or rejected");
})

