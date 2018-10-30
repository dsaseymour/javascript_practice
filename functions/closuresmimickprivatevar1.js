//========================
//USING CLOSURES TO MIMICK PRIVATE VARIABLES
/*In many programming languages, there exists a concept of private variables, where properties
of the object that are hidden from outside parties. This is a useful feature, since we don’t want
to overburden the users of our objects (usually ourselves) with unnecessary implementation
details when accessing those objects from other parts of the code. Unfortunately, JavaScript
as a language doesn’t have support for private variables. But by using the concept of a
closure, we can achieve an acceptable approximation*/
//========================
function Ninja(){//Ninja function BEGINS
    var feints=0; //declares a variable inside the function constructor, because the scope of the variable is limited to 
    //inside the constructor it is a private variable
    //we'll use it to count how many times the ninja has feinted 
    
    this.getFeints= function(){
        return feints;
    };
    this.feint= function(){
        feints++;
    };
}//Ninja function ENDS

var ninja1= new Ninja();
ninja1.feint();
assert(ninja1.getFeints() == 1, "We're able to access the internal feint count");
assert(ninja1.feint === undefined, "And the private data is inaccessible to us.");

var ninja2= new Ninja();
assert(ninja2.getFeints() == 0, "The second ninja gets it's own feint variable");


