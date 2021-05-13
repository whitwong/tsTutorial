// classes and Access Modifiers
// Note: When you make a property private, that property is only accessible within the class (e.g. cannot console.log outside the class, but this.details in the class is acceptable). Read-only property makes it accessible outside of the class but cannot modify that property.
class Invoice {
  // readonly client: string;
  // private details: string;
  // public amount: number;

  // constructor(c: string, d: string, a: number) {
  //   this.client = c;
  //   this.details = d;
  //   this.amount = a;
  // }

  // Note: This way of defining a constructor only works if you add the access modifiers. Will cause errors if you don't have access modifiers in front of properties.
  constructor( 
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    // this.client = 'something else';
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

// instantiate the class and create an object based on it
const invOne = new Invoice('Mario', 'work on the Mario website', 250);
const invTwo = new Invoice('Luigi', 'work on the Luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
  // invOne.client = 'something else';
  console.log(inv.client, inv.amount, inv.format());
})

const form = document.querySelector('.new-item-form') as HTMLFormElement;

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