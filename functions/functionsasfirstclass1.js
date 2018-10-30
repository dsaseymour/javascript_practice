//========================
//ANYTHING WE CAN DO WITH AN OBJECT, WE CAN DO WITH A FUNCTION
//========================
//created via literals
function ninjaFunction(){

}

//Assigned to variables, array entries and properties of other objects
var ninjaFunction=function(){}; //assign a function to a varialbe
ninjaArray.push(function(){}); //add a function to an array
ninja.data=function(){};//assigns a function as a variable of another object

//Passed as arguments to functions
function call (ninjaFunction){
    ninjaFunction(); //remember ninjaFunction is just a random name we created to refer to the function that will be passed as an argument
}
call(function(){}); //a newly created function is passed as an argument to the function call

//Returned as values from functions 
function returnNewNinjaFunction(){
    return function(){}; //returns a new function
}

//Possess properties that can be dynamically created and assigned 
var ninjaFunction=function(){};
ninjaFunction.name="Hanzo";//adding a new property to the function



