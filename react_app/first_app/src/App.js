import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'
import UserInput from './User/UserInput.js'
import UserOutput from './User/UserOutput.js'
import Validation from './User/Validation.js'
import CharComponent from './User/CharComponent.js'
//

// always update state in an immutable fashion
// example in deletePersonHandler

// any javascript can be written,
//

class App extends Component {
  // always need to render() to the DOM

  //only works in components that are extended from something
  state = {
    persons: [
      { id: 1, name: "Max",age: 28 },
      { id: 2, name: "Manu",age: 26 },
      { id: 3, name: "Steph",age: 25 }
    ],
    persons2: [
      { id: 1, name: "John",age: 28 },
      { id: 2, name: "Tim",age: 26 },
      { id: 3, name: "Steve",age: 25 }
    ],
    username: "jonnyFive!",
    conditionalRender: true,
    condtionalRenderPersons: true,
    personRenderNew: true,

    userInput: ""
  }



  switchNameHandler = () => {
    console.log('was clicked');
    console.log(this.state);
    //DO NOT DO THIS:   BAD
    //this.state.persons[0].name = "maximilian"

    //DO DO THIS:   GOOD
    this.setState( {
      persons: [
      { name: "Maximilian",age: 28 },
      { name: "Manu",age: 26 },
      { name: "Steph",age: 27 }
    ]
  } )
  }


// to show different option of passing argument into changing state
// arrow function can be inefficient, use bind syntax when possible
  newSwitch = (newName) => {
      console.log("newSwitch");

      this.setState({
        persons: [
        { name: newName, age: 56 },
        { name: "Manu",age: 26 },
        { name: "Steph",age: 27 }
      ]
      })
  }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons2.findIndex(p => {
      return p.id === id;
    })

    // js objects are only references to storage, dont mutate directly
    // spread below distributes all properties of object into new object, and selects personIndex
    const person = {
      ...this.state.persons2[personIndex]
    };
    // alternative option
    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    // spread here distributes persons2 object into new object called personsVar
    const personsVar = [...this.state.persons2];
    personsVar[personIndex] = person;


    this.setState( {
      persons2: personsVar

  } )
}

// event.target.value means that when the input in the component has an onChange value of props.changed, the state will be set to the user input, and as it is linked to the final userOutput render, it will update as the input field is populated, as the state is updating, and the element is equal to the state

// this is also called 'two way binding'
  handleUsernameEvent = (event) => {
    this.setState( {
      username: event.target.value
    })
  }


  toggleConditionalRender = () => {
    const currentRender = this.state.conditionalRender;
    this.setState( {
      conditionalRender: !currentRender
    })
  }


  togglePersonsRender = () => {
    const personRender = this.state.conditionalRenderPersons;
    this.setState( {
      conditionalRenderPersons: !personRender
    })
  }


  deletePersonHandler = (personIndex) => {
    //don't manipulate array wihtout creating copy first
    // splice with no args will just return new copy
    // could also use spread
    // const persons2 = [...this.state.persons2]
    const persons2 = this.state.persons2.slice();
    persons2.splice(personIndex, 1);
    this.setState({persons2: persons2})
  }


  inputChangedHandler = (event) => {
    this.setState({ userInput: event.target.value});
  }


  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  //this refers to class

  //props can be defined within an element tag also
  // click=





/////////////////////////////////////////////////////////////////////      R E N D E R           //////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////      R E N D E R           //////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////      R E N D E R           //////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////      R E N D E R           //////////////////////////////////////////////////////////////////////////
  render() {

    //// assignment string split
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <CharComponent
        character={ch}
        key={index}
        clicked={() => this.deleteCharHandler(index)}/>
    });




    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
      // box-shadow: '0 2px 3px #ccc'
    };



    let persons = null;

    if ( this.state.conditionalRenderPersons) {
      persons = (
      <div>
        <Person name="theo" age="28"/>

        <Person> SHAPES!!! </Person>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>

        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
        click={this.switchNameHandler}
        changed={this.nameChangedHandler}> Hello </Person>

        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    )
    }


    // dynamic and flexible list
    // name in each list item updates dynamically as input is given
    let persons2 = null;

    if ( this.state.personRenderNew) {
      persons2 = (
        <div>
        {this.state.persons2.map((person, index) => {
          return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}
            />
        })}
      </div>
      )
    }
    ////

////////////////////////////////////////////////////////////     R E T U R N         ////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////     R E T U R N         ////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////     R E T U R N         ////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////     R E T U R N         ////////////////////////////////////////////////////////////////////////

    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <button onClick={this.switchNameHandler}> switch this </button>

        <button onClick={() => this.newSwitch("Maxy!!")}> switch arrow </button>

        <button

          onClick={this.newSwitch.bind(this, "Maxywaxy")}> switch bind </button>

        <button onClick={this.handleUsernameEvent}> username </button>

        <button onClick={this.toggleConditionalRender}>
        toggle</button>

      <button onClick={this.togglePersonsRender}>
        toggle persons </button>



      <hr/>




       <input type="text" onChange={this.inputChangedHandler} value={this.state.userInput}/>

      <p>{this.state.userInput}</p>

      <Validation inputLength={this.state.userInput.length}/>

      {charList}


        <hr />

        {
          this.state.conditionalRender === true ?
            <div>
              <UserInput changed={this.handleUsernameEvent}/>
              <UserOutput username="username1"/>
              <UserOutput username="username2"/>
              <UserOutput username="username3"/>
              <UserOutput username={this.state.username} />
            </div>
          : null
        }

        {persons}
        {persons2}

      </div>
    );

    // below is exactly same as jsx above

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hello"))
  }
}

export default App;
