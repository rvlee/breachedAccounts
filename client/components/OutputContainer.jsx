import React from 'react';
import Event from './Event.jsx';

const OutputContainer = ({data}) => {
  return (
    <div>
      {data.map(entry => <Event entry={entry} />)}
    </div>
  )
}

export default OutputContainer;