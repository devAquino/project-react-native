import axios from 'axios';

const api = axios.create({
    baseURL: 'https://projeto-3-de-sistemas-web-ii.herokuapp.com'
});

export default api;