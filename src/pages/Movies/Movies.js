import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import MovieList from "components/MovieList/MovieList";
import Search from "components/Search/Search";
import { getSearchMovie } from '../../services/api'
import css from './Movies.module.css';



const Movies = () => {
    const [movieData, setMovieData] = useState([]);
    
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';
    const page = searchParams.get('page') ?? 1;

    const onSubmit = searchValue => {
    setSearchParams({ query: searchValue, page: 1 });
    };


    useEffect(() => {
        if (!query) {
            return;
        }
        
        getSearchMovie(query, page).then(({ results }) => setMovieData([...results]));
            
        
    }, [ query, page]);

   

   

            return (
                <div className={css.Movies}>
                    <h1 style={{ color: 'white' }}>Find your favourite movie</h1>
                    <Search onSubmit={onSubmit} />                    
                    <MovieList movieList={movieData} />
                    
                    
                </div>
            )
     
}

export default Movies;