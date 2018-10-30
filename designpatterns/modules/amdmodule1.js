//========================
//AMD DEFINING AND LOADING MODULES EXAMPLES
//========================
//LOADING DEPENDENCIES-------------------------------------------------------------------------------
define(['myModule','myOtherModule'], function(myModule, myOtherModule){
        console.log(myModule.hello());
    }//our callback function 
);
//the first argument for our define function is an array of the module's dependencies
//these dependencies are loaded in the background in a non-blocking manner

//once loaded define calls the second  argument which is a callback function
//the callback function takes as arguments, the dependencies that were loaded
//this means that the function can use these dependencies 


//DEFINING MODULES-------------------------------------------------------------------------------
define([],function(){
    return{
            hello: function(){
                    console.log('hello');
            },
            goodbye: function(){
                    console.log('goodbye');
             }
    }
});

