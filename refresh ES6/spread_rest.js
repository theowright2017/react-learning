//spread
//     used to split up array OR object properties
//     const newArray = [...oldArray, 1, 2]


//rest
//     used to merge a list of function args into array
//     function sortArgs(...args){
//          return args.sort()
//      }





const numbers = [1,2,3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);
// [1,2,3,4]




/////////////////////////


const person = {
  name: 'Max'
};

const newPerson = {
  ...person,
  age: 28
}

console.log(newPerson);
// {name: "Max", age: 28}

////////////////////


// here allows to take in as many arguments as chosen
const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1,2,3,4,5));
// [1]
















//
