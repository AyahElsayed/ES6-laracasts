console.log([2, 4, 6, 8, 10].indexOf(8) > -1) // true
console.log([2, 4, 6, 8, 10].indexOf(25) > -1) // false
// 8 , 28 => values
// includes() == indexOf()


console.log([2, 4, 6, 8, 10, 11].find(item => item % 2)) // 11
console.log([2, 4, 6, 8, 10, 11].findIndex(item => item % 2)) // 5

// -------------

class User {
    constructor(name, isAdmin) {
        this.name = name;
        this.isAdmin = isAdmin;
    }
}

let users = [
    new User('Aya', false),
    new User('sahar', true),
    new User('doaa', false)
];

console.log(users.find(user => user.isAdmin)) // sahar


// -----------

let items = ['aya', 'sahar', 'doaa'].entries();

for(let name of items) console.log(name);