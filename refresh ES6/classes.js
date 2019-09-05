class Human {
  constructor() {
    this.gender = 'male';
  }

  printGender() {
    console.log(this.gender);
  }
}


// to inherit always need to use super()
class Person extends Human {
  constructor() {
    super();
    this.name = 'Max';
    this.gender = "female";
  }
  printName() {
    console.log(this.name);
  }
}

// const person = new Person();
// person.printName();
// person.printGender();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//properties are like variables attached to classes and objects

//methods are functions attached to classes/ objects


// below is new syntax but only runs ins 'es6 / babel'

// class Human {
//     gender = 'male';
//   }
//
//   printGender = () => {
//     console.log(this.gender);
//   }
//
//
//   class Person extends Human {
//       name = 'Max';
//       gender = "female";
//     }
//     printName = () => {
//       console.log(this.name);
//     }
//
//     const person = new Person();
//     person.printName();
//     person.printGender();



















//
