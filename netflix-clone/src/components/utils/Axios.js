import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default Axios;