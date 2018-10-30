//========================
//INVOCATION AS A FUNCTION
//========================
function ninja(){
    return this; //the function in non-strict mode
}

function samurai(){
    "use strict"; // the function in strict mode
    return this;
}

assert(ninja() === window,
"In a 'non-strict' ninja function, " + "the context is the global window object"); //non-strict function has window as the function context
assert(samurai() === undefined,
"In a 'strict' samurai function, " +
"the context is undefined"); //the strict function has an undefined context
