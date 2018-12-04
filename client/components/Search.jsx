import React from 'react';

const Search = ({handleChange, handleClick, onChange, getAll}) => {
  let selection = ['breachedaccount', 'breach']
  return (
    <div>
      <label>Service</label>
        <select defaultValue = "breachedaccount" onChange={onChange}>
          {selection.map(entry => <option value={entry}>{entry}</option>)}
        </select>
      <label>Email or Domain</label>
        <input
          type="text"
          id="email"
          onChange={handleChange}>
        </input>
      <div>
        <button onClick={handleClick}>Search</button>
      </div>
      <div>
        <button onClick={getAll}>Search All Breached Domains </button>
      </div>
    </div>
  )
}

export default Search;