import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api', // URL do Django
});

export default api;
