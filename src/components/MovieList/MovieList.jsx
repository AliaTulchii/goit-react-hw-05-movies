import React from 'react';
import css from './MovieList.module.css'
import { Link, useLocation } from 'react-router-dom';
import drama from '../Image/movie.svg';

let img_path = 'https://image.tmdb.org/t/p/w500/';

const MovieList = ({ movieList }) => {
  const location = useLocation();

  return (
    <div>
      <ul className={css.MovieList}>
        {movieList.map(({ id, title, name, original_title, poster_path }) => (
          <li key={id} className={css.MovieListItem}>
            <Link to={`/movies/${id}`} state={{ from: location }} className={css.MovieListLink}>
              
              <img
                src={
                  poster_path ? `${img_path}${poster_path}` : drama
                }
                  alt={original_title || name}
                  className={css.MovieListImg}
                />
              
              <p className={css.MovieListTitle}>{title || name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;