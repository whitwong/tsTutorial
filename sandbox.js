/***** Explicit Types *****/
var character;
var age;
var isLoggedIn;
// age = 'luigi';
age = 30;
// isLoggedIn = 5;
isLoggedIn = true;
/***** Arrays *****/
var ninjas = [];
// ninjas = [10, 23];
ninjas = ['yoshi', 'mario'];
/***** Union Types *****/
// Note: Use pipe '|' in order set multiple types for a variable. Arrays require parentheses, whereas regular variables do not.
var mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);
var uid;
uid = '123';
uid = 123;
/***** Objects *****/
// Note: Can declare object type a couple of ways. 1) Set variable to 'object' type, but notice that setting variable to an array is allowable bc an array is a type of object. 2) Set variable to object and name properties and property types.
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
// ninjaOne = 'hello';
// ninjaOne = []; ----> This is okay! But probably not what we want.
var ninjaTwo;
ninjaTwo = { name: 'mario', age: 20, beltColor: 'black' };
