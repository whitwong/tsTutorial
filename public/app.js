"use strict";
// classes and Access Modifiers
// Note: When you make a property private, that property is only accessible within the class (e.g. cannot console.log outside the class, but this.details in the class is acceptable). Read-only property makes it accessible outside of the class but cannot modify that property.
var Invoice = /** @class */ (function () {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    // constructor(c: string, d: string, a: number) {
    //   this.client = c;
    //   this.details = d;
    //   this.amount = a;
    // }
    // Note: This way of defining a constructor only works if you add the access modifiers. Will cause errors if you don't have access modifiers in front of properties.
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        // this.client = 'something else';
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
// instantiate the class and create an object based on it
var invOne = new Invoice('Mario', 'work on the Mario website', 250);
var invTwo = new Invoice('Luigi', 'work on the Luigi website', 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    // invOne.client = 'something else';
    console.log(inv.client, inv.amount, inv.format());
});
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
