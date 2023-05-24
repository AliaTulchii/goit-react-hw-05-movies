import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import css from '../App/App.module.css'
import Home from '../../pages/Home'
import Movies from "pages/Movies";




export const App = () => {
  return (
    <div className={css.App}>
      <nav className={css.AppNav}>
        <div>
        <NavLink to="/" className={css.AppNavTitle}>Home</NavLink>
        <NavLink to="/movies" className={css.AppNavTitle}>Movies</NavLink>
        </div>
        
        <h1 className={css.AppLogo}>MoviesForest</h1>

      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movies:movieId" element={<div>MovieDetails</div>} />
        <Route path="/movies:movieId/cast" element={<div>Cast</div>} />
        <Route path="/movies:movieId/reviews" element={<div>Reviews</div>} />
      </Routes>
    </div>
  );
};
