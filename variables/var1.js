//========================
//VAR HAS NO BLOCK SCOPE
//========================
if (true){
    var test=true;
}
alert(test); //the test variable which was declared inside a code block is still alive outside of the block

//SAME BEHAVIOUR WITH LOOPS 
for(var i=0; i < 10; i++){
}
alert (i);
//i is a global variable 

function sayHi(){
    if(true){
        var phrase="Hello";
    }
    alert(phrase);
}