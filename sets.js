let items = new Set(['one', 'two', 'three', 'one'])

// sets item must be unique

console.log(items); // [one ,'two', 'three' ]
// size / values / add / delete / has /forEach / clear

// -----

let tags = ['php','java','vue','java'];

let set = new Set(tags); // remove douplicates

// convert to aray by using spread opertator

console.log(...set); // output > php java vue
// filter
console.log([...set]) // output > ["php" , "java" , "vue"]

console.log([...set].filter(tag => tag.length == 3)); //["php" , "vue"]

