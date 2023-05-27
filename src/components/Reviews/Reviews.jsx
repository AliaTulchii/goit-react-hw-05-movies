import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import css from './Reviews.module.css'

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [totalResults, setTotalResults] = useState(null);
  
    useEffect(() => {
      getMovieReviews(movieId).then(({ results, total_results }) => {
        setReviews(results);
        setTotalResults(total_results);
      });
    }, [movieId]);
  
    return (
      <div className={css.Reviews}>
        {totalResults && (
          <ul className={css.ReviewsList}>
            {reviews.map((review, index) => {
              return (
                  <li key={index} className={css.ReviewsItem}>
                    <h4 className={css.ReviewsTitle}>Author:
                      <span className={css.ReviewsAuthor}>{review.author}</span>
                    </h4>
                    <p className="description">{review.content}</p>
      
                  </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  };
  
  export default Reviews;