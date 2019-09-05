// primitive vs reference
// variables etc are mutated when changed,
// objects etc are just referenced and only the pointer is changed

// to change actual object, use spread
// 3..



const number = 1;
const num2 = number;

console.log(num2);



////////////


const person = {
  name: "max"
};

const secondPerson = person;

person.name = "theo"
console.log(secondPerson);

// changing person.name here also means secondPerson is changed because secondPerson is just referencing where the person object is stored

////////////

// 3..

const newPerson = {
  ...person
};

person.name = "john"

console.log(newPerson);

// here the object itself is changed as ... mutates the actual object
// person and newPerson are now different







//
