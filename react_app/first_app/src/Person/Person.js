import React from 'react';
// import Css from './Person.css';
import '../App.css';

// const person = function() {
//
// }

//props.click

const person = (props) => {
  return (
          <div className="Person">
              <p onClick={props.click}>I'm {props.name} person and i am {props.age} years old!</p>

              <p> {props.children} </p>
              <input type="text" onChange={props.changed}
              />
          </div>
          //props.children refers to child content, ie any text between >     <
          )
};






export default person;
