import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import MovieList from "components/MovieList/MovieList";
import Search from "components/Search/Search";
import { getSearchMovie } from '../../services/api'
import css from './Movies.module.css';
import drama from '../../components/Image/drama-masks.svg'



const Movies = () => {
    const [movieData, setMovieData] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false); 
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
        
        getSearchMovie(query, page)
            .then(({ results }) => {
                if (!results.length) {
                    setIsEmpty(true);
                    return;
                }
                setMovieData([...results]);
            } );
            
        
    }, [ query, page]);

   

   

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