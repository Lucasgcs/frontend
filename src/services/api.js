import axios from 'axios';

const api = axios.create({
  baseURL: "https://appoministackbackend.herokuapp.com",
});

export default api;