// Can explicity state 'Function' type
let greet: Function;
// greet = 'hello';  --> Cannot re-assign greet function to a string value.
greet = () => {
  console.log("hello, world");
}

// Can create optional parameters by adding '?' next to the parameter
const multiply = (a: number, b: number, c?: number|string) => {
  console.log(a + b);
  console.log(c);
}

// Can give a parameter a default value --> similar to declaring a variable with a value. When there is no return value, typescript interprets the function to return void (or nothing).
const add = (a: number, b: number, c: number|string = 10) => {
  console.log(a + b);
  console.log(c);
}
add(30, 1);
add(5, 10, '20');

// Can define what the expected return value is by adding a data type after function parentheses. Depending on function setup, typescript can infer the data type and there's no reason to explicitly set data type for the function.
const minus = (a: number, b: number): number => {
  return a - b;
}

let result = minus(10, 7);
// result = 'something else';