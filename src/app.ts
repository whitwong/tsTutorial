// interface - describes the structure of a class or object. any class or object that uses the interface must conform to the structure/rules of the interface.
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'shaun',
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spent ', amount);
    return amount;
  }
}

const greetPerson = (person: IsPerson) => {
  console.log('hello ', person.name);
}

greetPerson(me);

console.log(me);

// import { Invoice } from './classes/Invoice.js';

// const invOne = new Invoice('Mario', 'work on the Mario website', 250);
// const invTwo = new Invoice('Luigi', 'work on the Luigi website', 300);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv => {
//   console.log(inv.client, inv.amount, inv.format());
// })

// const form = document.querySelector('.new-item-form') as HTMLFormElement;

// // inputs
// const type = document.querySelector('#type') as HTMLSelectElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;

// form.addEventListener('submit', (e: Event) => {
//   e.preventDefault();

//   console.log(
//     type.value,
//     tofrom.value,
//     details.value,
//     amount.valueAsNumber
//   )
// })