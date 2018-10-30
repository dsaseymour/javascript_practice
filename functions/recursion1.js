//========================
//POWER OF FUNCTION
//========================
//write a function pow(x,n) that raises x to a natural power of n 
/*
pow(2, 2) = 4
pow(2, 3) = 8
pow(2, 4) = 16
*/ 
//ITERATIVE IMPLEMENTATION
function pow(x,n){//iterative power function BEGINS
    let result=1;
    for (let i=0;i<n;i++){//for loop begins
        result*=x;
    }//for loop ends 
return result;
}//iterative power function ENDS
alert(pow(2,3));

//RECURSIVE IMPLEMENTATION
function pow(x,n){
    if(n == 1){
        return x;
    }else{
        return x * pow(x,n-1);
    }
}
alert(pow(2,3));

//RECURSIVE IMPLEMENTATION USING A TERNARY OPERATOR
function pow(x,n){
    return (n == 1) ? x : (x * pow(x, n-1));
}

