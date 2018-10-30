//========================
//HOISTING: VAR DECLARATIONS ARE PROCESSED AT FUNCTION START 
//========================
function sayHi(){
    phrase="Hello";
    alert(phrase);
    var phrase;
} //this code is technically the same as 

function sayHi(){
    var phrase;
    phrase="Hello";
    alert(phrase);
}

//even this 
function say(){
    phrase="Hello";

    if(false){
        var phrase;
    }
    alert(phrase);
}//the if branch never executes but this does not matter 
//the var inside is processed in the beginning of the function 