//========================
//UPWARD FUNARG PROBLEM
//========================
/*
this is lexical/static scope 

foo returns a function and 
this function uses free variable x 

the variable x will be found in the saved [[Scope]] of the returned
bar function

*/
function foo(){//FOO BEGINS
    var x=10;
    return function bar(){ //returned function bar BEGINS
        console.log(x); //freevariable x
    };//returned function bar ENDS
}//FOO ENDS

var returnedFunction=foo();

//global variable x
var x=20;

returnedFunction(); //gives the value 10 but not 20