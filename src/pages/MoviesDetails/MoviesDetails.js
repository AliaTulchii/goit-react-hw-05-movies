import { Suspense, useEffect, useState } from "react";
import { Link, Outlet,  useParams } from "react-router-dom";
import { getMovieDetails } from "services/api";
import css from './MoviesDetails.module.css';
import drama from '../../components/Image/movie.svg';

let img_path = 'https://image.tmdb.org/t/p/w500/';

const MoviesDetails = () => {
    const {movieId} = useParams();
    console.log(movieId);
    const [movie, setMovie] = useState({});


    



    useEffect(() => {
        getMovieDetails(movieId).then(res => {
            setMovie(res);
       })
    }, [movieId])
    
    
    return <div style={{color: "white"}} >
                <h1 className={css.MoviesDetailsTitle}>Movie Details of {movie.title}</h1>

                <div className={css.MoviesDetailsBox}>

                    <img
                        src={
                            movie.poster_path ? `${img_path}${movie.poster_path}` : drama
                        }
                        // src={img_path + `${movie.poster_path}`}
                        alt=""
                        className={css.MoviesDetailsImg}
                    />
                
                    <div className={css.MoviesDetailsAbout}>
                    <h2>{movie.title}</h2>

                    <h3>Overview</h3>
                    <p>{movie.overview}</p>

                    <h3>Genres:</h3>
                    <p>{movie.genres?.map(({ name }) => name).join(', ')}</p>
            
                
                    <h3>Rating: <i>{movie.vote_average}</i></h3>
            
                </div>
        
        
            </div>

        <ul className={css.MoviesDetailsList}>
            <li className={css.MoviesDetailsItem}>
                <Link to={`cast`} className={css.MoviesDetailsLink}>Cast</Link>
            </li>
            <li>
                <Link to={`reviews`}  className={css.MoviesDetailsLink}>Reviews</Link>
            </li>
        </ul>

        <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        </Suspense>
    </div>
}

export default MoviesDetails;