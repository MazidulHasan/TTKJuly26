//blueprint
class User{
    constructor(name, role){
        this.name = name;
        this.role = role;
    }
    
    introduce(){
        console.log(`My name is ${this.name}`);
        console.log(`My role is ${this.role}`);
    }
}

// user 1
const user1 = new User("Rahim", "QA")
// console.log(user1.name);
user1.introduce();

// user 2
const user2 = new User("Karim", "Dev")
// console.log(user2.name);
user2.introduce()