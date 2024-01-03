//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "sanket"
    function two(){
        const website = "sanket.com"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "sanket"
    if(username === "sankete"){
        const web = "sanket@com"
        console.log(username + web)
    }
    // console.log(web);
}
// console.log(username);

