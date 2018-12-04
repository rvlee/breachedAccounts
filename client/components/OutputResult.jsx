import React from 'react';
import Event from './Event.jsx';

const OutputResult = ({data}) => {
  if (data === null) {
    return null;
  }

  return data !== '' ? (
    <div>
      {data.map((entry, index) => <Event key={index} entry={entry} />)}
    </div>
  ) : <center>Congratulations! Your email has not been breached! </center>
}

export default OutputResult;