"use strict";
// const anchor = document.querySelector('a')!; // By adding a '!' we're saying that, as developers, we know that an element exists and will return something (e.g. an anchor tag exists, so don't worry about potentially returning a null value).
// // Runtime check to make sure we have an anchor tag
// // if(anchor){
// //   console.log(anchor.href);
// // }
// console.log(anchor.href);
/*** Type Casting ***/
// const form = document.querySelector('form');
var form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
