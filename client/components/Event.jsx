import React from 'react';
import "./style.css";

const Event = ({entry}) => {
  return (
    <div className="list-container">
      <li className="list">
        <div>
          <div className="title">{entry.Title}</div>
        </div>
        <div className="entry">
          <label className={"label", "entryLabel"}>Added Date:</label>
          <div className="entryValue">{entry.AddedDate}</div>
        </div>
        <div className="entry">
          <label className={"label", "entryLabel"}>Breach Date:</label>
          <div className="entryValue">{entry.BreachDate}</div>
        </div>
        <div className="entry">
          <label className="label">Description:</label>
          <div className="entryValue" dangerouslySetInnerHTML={{ __html: entry.Description }} />
        </div>
      </li>
    </div>
  )
}


export default Event;