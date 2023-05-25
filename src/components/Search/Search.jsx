import React, { useState } from 'react';


const Search = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      alert('Enter the request');
      return;
    }

    onSubmit(query);
  };

  const handleChange = e => {
    setQuery(e.currentTarget.value.trim());
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit">
          Search
        </button>
        <input
          className="input"
          placeholder="Type your text"
          required=""
          type="text"
          value={query}
          onChange={handleChange}
        />
      </form>
    </>
  );
};



export default Search;