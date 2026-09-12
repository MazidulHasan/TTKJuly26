function sum(a,b) {
    console.log(a+b);
}

function mult(a,b) {
    console.log(a*b);
}

// sum(2,4)
// mult(2,4)

function calculate(a,b,whatTodo) {
    whatTodo(a,b)
}

calculate(2,4,mult)
calculate(2,4,sum)