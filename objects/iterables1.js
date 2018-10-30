//iterables allow us to have any object be useable in for..of loops
let range={
from: 1, 
to: 5
};

//to make the range object iterable we must add a method named Symbol.iterator
//this method must return an iterator 
//the returned iterator must have a method next()

//we are defining the Symbol iterator method which is what the for..of loop calls first 
range[Symbol.iterator]=function(){// defining the symbol iterator BEGIN
        return{//returning the iterator BEGIN 
                    current: this.from,
                    last:this.to,
                    next(){//defining the iterator's next function BEGIN
                                if(this.current<=this.last){
                                        return{done:false, value:this.current++};
                                }else{
                                 return{done:true};   
                                }
                    }//defining the iterator's next function END
        };//returning the iterator END
};  // defining the symbol iterator END

for (let num of range){
    alert(num);
}

//range itself does not have an iterator
//the iterator is created by calling range[Symbol.iterator]() and handles the iteration
//the iterator object is separate from the object it iterates over
