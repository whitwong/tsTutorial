"use strict";
// classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
// instantiate the class and create an object based on it
var invOne = new Invoice('Yoshi', 'work on the Mario website', 250);
var invTwo = new Invoice('Luigi', 'work on the Luigi website', 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invOne.client = 'Mario';
invTwo.amount = 400;
console.log(invOne, invTwo);
console.log(invoices);
var form = document.querySelector('.new-item-form');
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
