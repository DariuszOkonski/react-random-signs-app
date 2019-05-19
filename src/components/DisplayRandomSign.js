import React from 'react';

const DisplayRandomSign = (props) => {
  return (
    <div className='display-random-sign'>
      <h2>{props.randomCode}</h2>
    </div>
  );
}

export default DisplayRandomSign;