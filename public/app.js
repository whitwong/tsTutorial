// Advantages of modularizing: Code more readable and updateable
// Drawbacks of modularizing: 1) import/export only available for modern browsers (e.g. updated tsconfig.json to use ES6/es2015). 2) multiple network calls now that we're compiling different .ts files. 
import { Invoice } from './classes/Invoice.js';
// instantiate the class and create an object based on it
const invOne = new Invoice('Mario', 'work on the Mario website', 250);
const invTwo = new Invoice('Luigi', 'work on the Luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
