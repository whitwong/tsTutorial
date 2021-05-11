// Variable declaration //
let age: any = 25;

age = true;
console.log(age)
age = 'hello';
console.log(age)
age = { name: 'luigi' };
console.log(age)

// Arrays //
let mixed: any[] = [];
mixed.push('mario');
mixed.push(25);
mixed.push(false);
console.log(mixed);

// Object //
let ninja: { name: any, age: any };
ninja = { name: 'yoshi', age: 25 };
console.log(ninja);
ninja = { name: 25, age: 'yoshi' };
console.log(ninja);


// Note: Use with caution because using 'any' type can negate the benefits of using typescript. But it is useful in case you don't know what the type might be for an object property in the future or something similar.