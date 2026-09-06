// 1. Global Scope
let globalVar = "I am global (accessible everywhere)";

function testScope() {
  // 2. Function Scope
  const functionVar = "I am inside the function";
    globalVar = "Updated Value"
  if (true) {
    // 3. Block Scope
    const blockVar = "I am inside the block";
    var notBlockScoped = "I ignore block scope (var)";

    // console.log(globalVar);     // Accessible
    // console.log(functionVar);   // Accessible
    // console.log(blockVar);      // Accessible
  }

  
  
//   console.log(notBlockScoped);  // Accessible (var is function-scoped)
  // console.log(blockVar);     // Error: blockVar is not defined
}

testScope();

console.log(globalVar);         // Accessible
// console.log(functionVar);    // Error: functionVar is not defined
// console.log(blockVar);       // Error: blockVar is not defined