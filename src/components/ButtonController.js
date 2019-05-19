import React from 'react';

const ButtonController = (props) => {
  return (
    <div className='button-controller'>
      <button
        onClick={props.handleCreateRandomSignsClick}
      >Create Random Signs</button>
      <button
        onClick={props.handleAddToTableClick}
      >Add to table</button>
      <button
        onClick={props.handleClearRandomSignClick}
      >Clear random sign</button>
      <button
        onClick={props.handleClearTableClick}
      >Clear table</button>
    </div>
  );
}

export default ButtonController;