import React from 'react';
import User from './User.css';

const userOutput = (props) => {
  return (
    <div className="User">
      <p> paragraph 1 </p>
      <p> {props.username} </p>




    </div>
  )
};


export default userOutput;
