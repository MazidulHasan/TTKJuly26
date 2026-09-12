// Promise has 3 state"
//  - pending
//  - fulfiled
//  - rejected

let promise = new Promise((resolve, reject) =>{
    console.log("From  promise");
    resolve("Resolve");
    // reject('rejected')
})

promise.then((result) =>{
    console.log("Inside promise");
    console.log(result);
})