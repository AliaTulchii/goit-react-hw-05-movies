import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api';
import css from './Cast.module.css';
import drama from '../Image/actor.svg';


let img_path = 'https://image.tmdb.org/t/p/w500/';

export const Cast = () => {

    const { movieId } = useParams();
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        getMovieCast(movieId).then(({ cast }) => {
            setCasts(cast);
        })
    }, [movieId]);

    return <div className={css.Cast}>
    <h3 className={css.CastTitle}>Starring</h3>
      <ul className={css.CastList}>
        {casts.map(({ id, name, profile_path, character }) => {
          return (
            <li key={id} className={css.CastItem}>
              <div>
                <img
                src={
                    profile_path ? `${img_path}${profile_path}` : drama
                  }
                alt={name}
                className={css.CastImg}
                />
                <p>Actor: {name}</p>
                <p>Role: {character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
}