import axios from 'axios';

const key = '34c43bf884421ce859303b56578677a3';
const url = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = url;
axios.defaults.params = {
    api_key: key,
    include_adult: 'false',
    language: 'en-US',
}


export const getMoviesTrending = async (page = 1) => {
    const config = {
        params: {
            page: page,
        }
    };

    try {
        const response = await axios.get(`trending/all/day`, config);
        return response.data;
    } catch (error) {
        alert('Something went wrong!!!')
  }
  
    

   
};

export async function getMovieDetails(movieId) {
    try {
      const response = await axios.get(`movie/${movieId}`);
      return response.data;
    } catch (error) {
      alert(error.message);
    }
}
  

export async function searchMovie(searchValue) {
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
      alert(error.message);
    }
}
  


export async function getMovieCredits (movieId) {
  const config = {
    params: {},
  };

  try {
    const response = await axios.get(`movie/${movieId}/credits`, config);

    return response.data;
  } catch (error) {
    alert(error.message);
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
    alert(error.message);
  }
}