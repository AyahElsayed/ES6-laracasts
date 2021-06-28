class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    static register(...arg) {
        return new User(...arg) //return new User(username, email)
    }

    changeEmail(newEmail) {
        this.email = newEmail;
    }
}

let user =  User.register('Aya', 'ayah@gmail.com'); // without using => new User 

// user.changeEmail('fooAgmail.com');
console.dir(user);

// ---------------
