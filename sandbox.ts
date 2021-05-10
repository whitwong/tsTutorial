/*****  Arrays *****/
// Note: Implicit type set if an array is initialized with elements of one type (e.g. all strings or all numbers). When trying to push or modify an array with implicit types with values not of that type, ts won't allow you to compile the script. If array is initialized with mixed types, then you can modify the array with those types that are specified.
let names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
// names.push(74);
// names[0] = 3;
// names = 'hello';

let numbers = [10, 20, 30, 40];
numbers.push(25);
// numbers.push('shawn');
// numbers[1] = 'sean';

let mixed = ['key', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(31);
mixed[0] = 3;
// mixed.push(true)


/*****  Objects *****/
// Note: When initializing an object, type properties are implicitly set for each key in the object. Cannot modify the object property with different type or add a new property.
let ninja = {
  name: 'mario',
  belt: 'black',
  age: 30
};

ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking'];

// ninja = 'hi';
ninja = {
  name: 'yoshi',
  belt: 'orange',
  age: 10, 
  // skills: ['hyah', 'grrr']
};