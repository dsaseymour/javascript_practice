//========================
//DECORATORS
//========================

let worker={//BEGIN WORKER
    someMethod(){//somemethod BEGINS
        return 1;
    },

    slow(x){//SLOW BEGINS
        alert(" called with "+ x);
        return x * this.someMethod();
    }//SLOW ENDS
}//END WORKER

function cachingDecorator(func){//cachingdecorator BEGINS
    let cache = new Map();
    return function(x){//returned function begins
        if(cache.has(x)){//yes this function is in the map
            return cache.get(x);
        }//yes this function is in the map

        //this function is not in the map
        let result =func(x);    
        cache.set(x,result);
        return result;
    };//returned function ends
}//cachingdecorator ENDS 

alert (worker.slow(1));

worker.slow=cachingDecorator(worker.slow);


