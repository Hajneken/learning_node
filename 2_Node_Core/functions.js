// function statement 
function greet(){
    console.log('Hi !');
}

// invoke the function
greet()

// functions are first class, give it as argument 
function logGreeting(fn){
    // invoke the accepted function
    fn();
}

logGreeting(greet)

//literal expression
"Expression String"

// function expression 
const fnExpression = function(){
    console.log("Logging out of function expression!")
}

// it's first class 
logGreeting(fnExpression);

// use a function on the fly
logGreeting(function(){
    console.log("Function created on the fly!")
})



