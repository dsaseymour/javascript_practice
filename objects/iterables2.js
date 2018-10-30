//========================
//CALLING AN ITERATOR NORMALLY
//========================
for (let char of "test"){
    alert(char);
}

//explicitly calling an iterator
//iterating over a string with direct calls 
//========================
//EXPLICITLY CALLING AN ITERATOR
//========================
let str="Hello";
let iterator=str[Symbol.iterator]();

while(true){
    let result=iterator.next();
    if(result.done)break;
    alert(result.value);
}
//this method of making direct calls to the iterator gives us more control over the iteration process
