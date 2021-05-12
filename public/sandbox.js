"use strict";
// Can explicity state 'Function' type
var greet;
// greet = 'hello';  --> Cannot re-assign greet function to a string value.
greet = function () {
    console.log("hello, world");
};
// Can create optional parameters by adding '?' next to the parameter
var multiply = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
// Can give a parameter a default value --> similar to declaring a variable with a value. When there is no return value, typescript interprets the function to return void (or nothing).
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(30, 1);
add(5, 10, '20');
// Can define what the expected return value is by adding a data type after function parentheses. Depending on function setup, typescript can infer the data type and there's no reason to explicitly set data type for the function.
var minus = function (a, b) {
    return a - b;
};
var result = minus(10, 7);
// result = 'something else';
