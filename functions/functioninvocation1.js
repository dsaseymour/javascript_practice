//========================
//FUNCTION CALLING MECHANISMS
//========================
skulk('Hatori'); //invoked as a function

(function(who){return who;})('Hatori'); //invoked as a function

ninja.skulk('Hatori'); //invoked as a method of ninja 

var ninja=new Ninja('Hatori'); //invoked as a constructor

skulk.call(ninja,'Hatori'); //invoked via the call method

skulk.apply(ninja,['Hatori']);//invoked via the apply method