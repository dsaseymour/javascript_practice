//========================
//CLOSURES
//========================
let name="John";

function sayHi(){//sayHi BEGINS
    alert("Hi, " + name);
}//sayHi ENDS

name="Pete";
sayHi(); //What will show?
//in these situations we have a function scheduled to execute later than it is created 
//does it pickup the latest changes?
