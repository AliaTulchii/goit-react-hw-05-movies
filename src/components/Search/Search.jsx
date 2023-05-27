import React, { useState } from 'react';
import Notiflix from 'notiflix';
import css from './Search.module.css'
import { BsSearchHeartFill } from 'react-icons/bs';



const Search = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  


  const handleChange = e => {
    setQuery( e.currentTarget.value.toLowerCase());
  };


  const handleSubmit = e => {
    e.preventDefault();

    if (!query) {
      Notiflix.Notify.warning('Enter what movie are you looking for!')
      
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  

  return (
    <>
      <form className={css.Cast} onSubmit={handleSubmit}>        
        <input
          placeholder="Enter your movies name"
          required=""
          type="text"
          value={query}
          onChange={handleChange}
          className={css.CastInput}
        />
        <button type="submit" className={css.CastButton}>
        <BsSearchHeartFill/>
        </button>
      </form>
    </>
  );
};



export default Search;