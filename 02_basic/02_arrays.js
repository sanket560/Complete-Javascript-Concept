const marvel_hero = ["thor" , "ironman ", "spiderman"]
const dc_hero = ["superman" , "flash" , "batman"]

// marvel_hero.push(dc_hero) // it wont push values it connect array with comma

// const allhero =  marvel_hero.concat(dc_hero) 
// it merge arrays

// const all_new_hero = [...dc_hero,...marvel_hero]
// it spread all items individualy

//nested array
//also convert nested array to single array with single item
const another_Array = [1,2,3,4,[5,6,7],8,[1,3,[4,6]]]
const real_another_array = another_Array.flat(Infinity)
console.log(real_another_array);

//creating array

// it create array from one object
console.log(Array.from("sanket"));

const score1 = 300
const score2 = 500
const score3 = 600

// it create array from set of element 
console.log(Array.of(score1,score2,score3))
