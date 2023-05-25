// import css from './Button.module.css'

// function Button({loadMore}) {
//     return (<button className={css.Button} onClick={loadMore}>
//         Load more...
//     </button>)
// }

// export default Button;





import React, { useState } from 'react';


const LoadMore = ({ loadMore }) => {
  const [activePage, setActivePage] = useState(1);
  loadMore(activePage);

  const changePage = () => setActivePage(prev => prev + 1);

  return (
    <div>
      <button className="btn" type="button" onClick={changePage}>
        Load more...       
      </button>
    </div>
  );
};

export default LoadMore;
