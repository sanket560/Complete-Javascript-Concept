// const myarr = [0,11,23,54,15,34,76]
// console.log(myarr[2]);
// myarr.push(100)
// console.log(myarr);

// const myHero = ["shaktiman" , "naagraj"]
// const newArr = new Array(1,2,3,4)

// ++++++++++++++++ array methods +++++++++++++++++++++++++
const myarr = [0,11,23,54,15,34,76]
// myarr.push(100)//push element at end
// myarr.pop()//remove last element
// myarr.shift() // remove first element
// myarr.unshift(55)//push element at start but shift all elements
// console.log(myarr.includes(23));
// console.log(myarr.indexOf(3));
// console.log(myarr );

// ++++++++++++++++ slice , splice +++++++++++++++

console.log("a" , myarr)
const myarr1 = myarr.slice(1,3) 
console.log(myarr1);
//it takes value from one range to -n range and it create new array without touching old array

console.log("b", myarr)
const myarr2 = myarr.splice(1,3) 
console.log(myarr2);
// it takes value from one range to n range and it create new array and remove that value from old array