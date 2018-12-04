import React from 'react';
import Event from './Event.jsx';

const OutputBreach = ({data}) => {
  console.log(data);
  if (data === null) {
    return null;
  }

  return data !== '' ? (
    <div>
      <Event entry={data} />
    </div>
  ) : <center>Congratulations! The domain you are searching for has not been breached! </center>
}

export default OutputBreach;