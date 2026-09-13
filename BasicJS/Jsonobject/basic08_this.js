const user = {
    name: "Rahim",
    greet() {
        console.log(this.name);
        console.log(user.name);
    }
}

user.greet()