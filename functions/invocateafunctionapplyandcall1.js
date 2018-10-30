//========================
//USING APPLY AND CALL TO SUPPLY THE FUNCTION CONTEXT
//========================

//the function juggles the arguments and puts the result onto whatever object is the function context
function juggle(){//juggle BEGINS
    var result=0;
    for (var n=0; n < arguments.length; n++){
            result +=arguments[n];
    }
    this.result=result;
}//juggle ENDS

var ninja1={};
var ninja2={};

juggle.apply(ninja1, [1,2,3,4]);
juggle.call(ninja2, 5,6,7,8);

assert(ninja1.result === 10, "juggled via apply");
assert(ninja2.result === 26, "juggled via call");
