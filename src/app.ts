// const anchor = document.querySelector('a')!; // By adding a '!' we're saying that, as developers, we know that an element exists and will return something (e.g. an anchor tag exists, so don't worry about potentially returning a null value).

// // Runtime check to make sure we have an anchor tag
// // if(anchor){
// //   console.log(anchor.href);
// // }

// console.log(anchor.href);


/*** Type Casting ***/
// const form = document.querySelector('form');
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  )
})