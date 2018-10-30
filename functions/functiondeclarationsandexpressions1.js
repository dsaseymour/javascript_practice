//========================
//FUNCTION DECLARATIONS VS FUNCTION EXPRESSIONS
//========================
function myFunctionDeclaration(){//function declaration1   
        function innerFunction(){}//inner function declaration
}//function declaration1

var myFunc=function(){};//function expression as a part of a variable declaration assignment
myFunction(function(){//function expression as an argument for a function call
                    return function() {}; // function expression as a function return value 
                }//function declaration
);

(function namedFunctionExpression(){} //named function expression that will be part of a function call that will be immediately invoked 
)();

+function(){}(); //function expressions that will be immediately invoked as an argument to a unary operator
-function(){}(); 
!function(){}(); 
~function(){}();

