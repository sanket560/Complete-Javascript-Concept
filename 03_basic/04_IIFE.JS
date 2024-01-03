// Immediately invoked function expresion(IIFE)

(function invoked(){
    //named IIFE
    console.log("DB CONNECTED");
})();

((name)=>{
    console.log(`DB ${name} CONNECTED`);
})('user')