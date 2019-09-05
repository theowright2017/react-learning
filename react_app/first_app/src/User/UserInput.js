import React from 'react';
import User from './User.css';

const userInput = (props) => {
  return (
    <div className="User">
      <input type="text" onChange={props.changed}/>




    </div>
  )
};

// this handles the user input field by bringing in props.changed


export default userInput;
