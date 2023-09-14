import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.pexels.com/v1/',
    headers: {'Authorization': 'TOKEN PEXELS'}
  });
