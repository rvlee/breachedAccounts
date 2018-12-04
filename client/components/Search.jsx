import React from 'react';

const Search = ({handleChange, handleClick, onChange, getAll, dropdownValue}) => {
  let selection = ['breachedaccount', 'breach']
  return (
    <div>
      <label>Service</label>
        <select onChange={onChange} value={dropdownValue}>
          {selection.map((entry, index) => <option key={index} value={entry}>{entry}</option>)}
        </select>
      <label>Email or Domain</label>
        <input
          type="text"
          id="searchText"
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