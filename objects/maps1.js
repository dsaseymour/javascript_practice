//========================
//INITIALIZING A MAP FROM OBJECT
//========================
let map = new Map([
    ['1',  'str1'],
    [1,    'num1'],
    [true, 'bool1']
]);
//the method Object.entries(obj) returns an array that lets us create a map from an object 

let map = new Map(Object.entries({
    name: "John",
    age: 30
}));

