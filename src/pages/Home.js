import { useEffect, useState } from "react";
import { getMovies } from "services/api";
import MovieList from "components/MovieList/MovieList";
import LoadMore from "components/LoadMore/LoadMore";



const Home = () => {
    const [movieData, setMovieData] = useState([]);
    const [showLoadMore, setShowLoadMore] = useState(false);
    const [page, setPage] = useState(1);
    



    useEffect(() => {
        
        getMovies(page)
            .then(({ results }) => {
                console.log(results);
                setMovieData(prev => [...prev, ...results]);
                
            }).finally(()=> setShowLoadMore(true));
            
        
    }, [page]);

    const onBtnClick = page => {
        setPage(page);
    }

   

            return (
                <div>
                    <h1 style={{color: 'white'}}>Popular today</h1>
                    <MovieList movieList={movieData} />                    
                    {showLoadMore && <LoadMore loadMore={onBtnClick} />}
                    
                </div>
            )
     
}

export default Home;