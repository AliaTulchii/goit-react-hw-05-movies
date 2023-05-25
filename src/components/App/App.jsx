import React from "react";
import {  Route, Routes } from "react-router-dom";
import css from '../App/App.module.css'
import Home from '../../pages/Home'
import Movies from "pages/Movies";
import MoviesDetails from "pages/MoviesDetails/MoviesDetails";
import { Layout } from "components/Layout/Layout";
import { Cast } from "components/Cast/Cast";
import Reviews from "components/Reviews/Reviews";




export const App = () => {
  return (
    <Routes className={css.App}>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies/>} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>} />
        </Route> 
        
        </Route>
        
    </Routes>
    
  );
};
