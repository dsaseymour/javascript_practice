//========================
//CLOSURES
//========================
function makeWorker(){//Makeworker BEGINS
    let name="Pete";
    return function(){
        alert(name);
    }
}//Makeworker ENDS

let name="John";
let work=makeWorker();

work(); //What will show?


