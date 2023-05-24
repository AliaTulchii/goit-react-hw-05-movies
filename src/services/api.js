import axios from 'axios';

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
        const { data } = await axios.get(`trending/all/day`, config);
        return data;
    } catch (error) {
        alert('Something went wrong!!!')
    }
    

   
};