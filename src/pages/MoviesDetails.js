import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "services/api";

let img_path = 'https://image.tmdb.org/t/p/w500/';

const MoviesDetails = () => {
    const {movieId} = useParams();
    console.log(movieId);
    const [movie, setMovie] = useState({});


    useEffect(() => {
        getMovieDetails(movieId).then(res => {
            setMovie(res);
       })
    },[movieId])
    return <div style={{color: "white"}}>
        <h1>Movie Details {movie.title}</h1>

        <div>
            <img src={img_path + `${movie.poster_path}`} alt=""/>
        </div>
    </div>
}

export default MoviesDetails;