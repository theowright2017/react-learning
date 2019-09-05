import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'


//**************
////  regarding setting new state.... using this method, ie functional component, means that unless we manually define all of the state in the new state, whatever we didnt will be overwritten
//**************


//below is example of functional component, doesnt inherit and therefore doesnt use state,
// need to read more on array destructuring but [personsState, setPersonsState] is to do with extracting elements from the array that is defined afterwards, i.e persons

// useState is a react hook
// need to research further

const app = props => {

//array destructuring
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max",age: 28 },
      { name: "Manu",age: 26 },
      { name: "Steph",age: 25 }
    ],
    otherState: {job: "teacher", salary: 5}
  });


// this is no longer needed and therefore the function is called directly in the JSX

  const switchNameHandler = () => {
    console.log('was clicked');
    //DO NOT DO THIS:   BAD
    //this.state.persons[0].name = "maximilian"

    //DO DO THIS:   GOOD
    setPersonsState( {
      persons: [
      { name: "Maximilian",age: 28 },
      { name: "Manu",age: 26 },
      { name: "Steph",age: 27 }
    ]
  });
};


  // no render required
  // personsState is now referring to persons
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <button onClick={switchNameHandler}> switch name </button>

        <Person name="theo" age="28"/>

        <Person> SHAPES!!! </Person>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>

        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />

        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    );

    // below is exactly same as jsx above

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hello"))
  }


export default app;
