//========================
//IMPLEMENTING MODULES VIA ANONYMOUS FUNCTIONS
//========================
(function(){
    //our variables are private inside this closure scope
    var myGrades=[ 93,95, 88, 0, 55, 91];

    var average= function(){//average function BEGINS
            var total= myGrades.reduce(function(accumulator,item){
                return accumulator + item},0);
            
            return  'Your average grade is ' + total /myGrades.length + '.';
    }//average function ends

    var failing= function(){//average function BEGINS
            var failingGrades=myGrades.filter(function(item){
                return item < 70;});
            
            return 'You failed' + failingGrades.length + 'times.';
    }//average function ends 

    console.log(failing());
}());

//our anonymous function has its own evaluation environment/closure and we
//immediately evaluate it this lets us hide variables from the global namespace 
//in this approach you can use local variables without accidentally overwriting existing global variables 
//while still having access to existing global variables







var global = 'Hello, I am a global variable :)';

(function () {
  // We keep these variables private inside this closure scope
  
  var myGrades = [93, 95, 88, 0, 55, 91];
  
  var average = function() {
    var total = myGrades.reduce(function(accumulator, item) {
      return accumulator + item}, 0);
    
    return 'Your average grade is ' + total / myGrades.length + '.';
  }

  var failing = function(){
    var failingGrades = myGrades.filter(function(item) {
      return item < 70;});
      
    return 'You failed ' + failingGrades.length + ' times.';
  }

  console.log(failing());
  console.log(global);
}());

// 'You failed 2 times.'
// 'Hello, I am a global variable :)'