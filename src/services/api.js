import axios from 'axios';
import Notiflix from 'notiflix';

const key = '34c43bf884421ce859303b56578677a3';
const url = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = url;
axios.defaults.params = {
    api_key: key,
    include_adult: 'false',
    language: 'en-US',
}


export const getMovies = async (page = 1) => {
    const config = {
        params: {
            page: page,
        }
    };

    try {
        const response = await axios.get(`trending/movie/day`, config);
        return response.data;
    } catch (error) {
      Notiflix.Notify.failure('Something went wrong!!!')
  }
  
    

   
};


export const getMoviesAll = async (page = 1) => {
  const config = {
      params: {
          page: page,
      }
  };

  try {
      const response = await axios.get(`trending/movie/week`, config);
      return response.data;
  } catch (error) {
    Notiflix.Notify.failure('Something went wrong!!!')
}

  

 
};

export async function getMovieDetails(movieId) {
    try {
      const response = await axios.get(`movie/${movieId}`);
      return response.data;
    } catch (error) {
      Notiflix.Notify.failure(error.message);
    }
}
  

export async function getSearchMovie (searchValue) {
    const config = {
      params: {
        query: searchValue,
        page: '1',
      },
    };
  
    try {
      const response = await axios.get(`search/movie`, config);
      return response.data;
    } catch (error) {
      Notiflix.Notify.failure(error.message);
    }
}
  


export async function getMovieCast (movieId) {
  const config = {
    params: {},
  };

  try {
    const response = await axios.get(`movie/${movieId}/credits`, config);

    return response.data;
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
}



export async function getMovieReviews(movieId) {
  const config = {
    params: {
      page: 1,
    },
  };

  try {
    const response = await axios.get(`movie/${movieId}/reviews`, config);

    return response.data;
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
}