import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend.takeat.app',
  timeout: 10000,
});

export default api;
