import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "services/api";
import MovieList from "components/MovieList/MovieList";



// let key = '&api_key=34c43bf884421ce859303b56578677a3';
// let base_url = 'https://api.themoviedb.org/3';

// let url= base_url+'/discover/movie?sort_by=popularity.desc'+key;

const Home = () => {
    const [movieData, setMovieData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [activePage, setActivePage] = useState(1);
    // const [url_set, setUrl] = useState(url);



    useEffect(() => {
      
        getMovies(activePage)
            .then(({ results }) => {
                console.log(results);
                setMovieData(prev => [...prev, ...results])
                    .finally(setLoading(true));
            })
        
    }, [activePage]);


    return <div>
        

        {movieData.map((movie) => {
            return (
                <div>
                    <MovieList movieList={movieData}/>
                </div>
            )
        })}
    </div>
}

export default Home;