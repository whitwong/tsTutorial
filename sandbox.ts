/***** Explicit Types *****/
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'luigi';
age = 30;

// isLoggedIn = 5;
isLoggedIn = true;


/***** Arrays *****/
let ninjas: string[] = [];
// ninjas = [10, 23];
ninjas = ['yoshi', 'mario'];


/***** Union Types *****/
// Note: Use pipe '|' in order set multiple types for a variable. Arrays require parentheses, whereas regular variables do not.
let mixed: (string | number | boolean)[] = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);

let uid: string|number;
uid = '123';
uid = 123;


/***** Objects *****/
// Note: Can declare object type a couple of ways. 1) Set variable to 'object' type, but notice that setting variable to an array is allowable bc an array is a type of object. 2) Set variable to object and name properties and property types.
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };
// ninjaOne = 'hello';
// ninjaOne = []; ----> This is okay! But probably not what we want.

let ninjaTwo: {
  name: string,
  age: number,
  beltColor: string
}

ninjaTwo = { name: 'mario', age: 20, beltColor: 'black' };