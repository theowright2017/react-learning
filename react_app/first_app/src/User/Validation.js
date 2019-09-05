import React from 'react';


const validation = (props) => {
  let valMessage = "text long enough";

  if (props.inputLength <= 5) {
    valMessage = "text too short"
  }


  return (
    <div>
      <p>{valMessage}</p>
    </div>

  )
  //
  // return (
  //
  //   <div>
  //   { props.inputLength > 5 ?
  //     <p> Text long enough </p>
  //     :
  //     <p> Text too short </p>
  //   }
  //   </div>
  //
  // )
};




export default validation
