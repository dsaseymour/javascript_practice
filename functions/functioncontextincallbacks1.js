//========================
//FORCING THE FUNCTION CONTEXT IN CALLBACKS
//========================
/*
Take a function that will perform an operation on every entry of an array

*/

//in imperative programming we pass an array to a 
//method and use a for loop to iterate over every 
//entry performing the operation over every entry
function manipulatecollection (collection){
    for (var n = 0; n < collection.length; n++){
        /*do something*/
    }
}

//the function approach operates on a single element and passes each entry to that function 
function manipulateelements(item){
    /*do soemthing to item*/
}


//BUILDING A FOR EACH FUNCTION TO DEMONSTRATE SETTING A FUNCTION CONTEXT 
//we have a collection of callback functions
//we iterate through the collection of lists 
//each iteration we perform the callback function with a specific list as the function context/object referred to as this
//we additionally pass the loop variable during each iteration

function forEach(list, callback){
    for (var n=0; n < list.length; n++){
        callback.call(list[n],n);
    }
}

var weapons =['shuriken','katana','nunchucks'];

forEach(weapons, function(index){ //#D
    assert(this == weapons[index], //#D
    "Got the expected value of " + weapons[index]); //#D
    });



