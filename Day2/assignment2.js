// Question 2: The Logic Gate (Filter & Math)
// Goal: Practice Arrow Functions, filter, and Math methods.
// Create an arrow function called getHighNumbers. It should take an array of mixed types (strings and numbers) and:
// Filter the array to keep only the numbers.
// Filter those numbers again to only keep ones greater than a random threshold between 1 and 50.
// Return the final array.

let getHighNumber=(arr)=>{
    let rndno= Math.floor(Math.random() * 50) + 1
    console.log("rndno value:", rndno);
    return arr.filter(x=>typeof x === "number").filter(x=> x>rndno);
}

console.log(getHighNumber([1, 2, 3, 4, 5, "Aaryan", 10, 20, 30, 40, 50]));