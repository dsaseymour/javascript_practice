//========================
//DEFINING A MODULE IN COMMON JS EXAMPLE SOMEONE CAN ACTUALLY UNDERSTAND
//========================
function myModule(){//myModule BEGINS
    this.hello = function(){
        return 'hello!';        
    }
    this.goodbye = function(){
        return 'goodbye!';        
    }
}//myModule ends

module.exports = myModule; //we use the special object module
//we use module.exports to expose our module and make it available for other modules to require in their programs
//we place a reference of our function into module.exports this lets CommonJS know we want to expose the 
//myModule function for others to use 


//WHEN SOMEONE wants to use myModule they can require it in their file as follows:
var myModule=require('myModule');
var myModuleInstance=new myModule();
myModuleInstance.hello();
myModuleInstance.goodbye();
