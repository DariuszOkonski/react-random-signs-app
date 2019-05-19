import React from 'react';

const DisplayTable = (props) => {
  const table = props.codes.map(element => <li key={element}>{element}</li>)

  return (
    <ul className='display-table'>
      {table}
    </ul>
  );
}

export default DisplayTable;