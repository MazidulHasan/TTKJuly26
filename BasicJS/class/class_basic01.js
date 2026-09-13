//blueprint
class User{
    constructor(name, role){
        this.name = name;
        this.role = role;
    }
}

// user 1
const user1 = new User("Rahim", "QA")
console.log(user1.name);

// user 2
const user2 = new User("Karim", "Dev")
console.log(user2.name);