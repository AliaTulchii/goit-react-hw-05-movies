import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import MovieList from "components/MovieList/MovieList";
import Search from "components/Search/Search";
import { getSearchMovie } from '../../services/api'
import css from './Movies.module.css';
import drama from '../../Image/drama-masks.svg'



const Movies = () => {
    const [movieData, setMovieData] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false); 
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');
    
    

    const onSubmit = searchValue => {
    setSearchParams({ query: searchValue});
    };


    useEffect(() => {
        if (!query) {
            return;
        }
        
        getSearchMovie(query)
            .then(({ results }) => {
                if (!results.length) {
                    setIsEmpty(true);
                    return;
                }
                setMovieData([...results]);
            });
            
        
    }, [ query]);

   
   

            return (
                <div className={css.Movies}>
                    <h1 style={{ color: 'white' }}>Find your favourite movie</h1>
                    <Search onSubmit={onSubmit} />                    
                    <MovieList movieList={movieData} />
                    {isEmpty && <div className={css.MoviesNotFound}><h1 className={css.MoviesNotFoundText}>Sorry, we didn't found any movies... Try again!</h1> <img src={drama} alt="" className={css.MoviesNotFoundImg}/></div>}
                    
                </div>
            )
     
}

export default Movies;