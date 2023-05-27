import css from './LoadMore.module.css'
import React, { useState } from 'react';


const LoadMore = ({ loadMore }) => {
  const [activePage, setActivePage] = useState(1);
  loadMore(activePage);

  const changePage = () => setActivePage(prev => prev + 1);

  return (
    <div>
      <button className={css.Buttn} type="button" onClick={changePage}>
        Load more...      
      </button>
    </div>
  );
};

export default LoadMore;
