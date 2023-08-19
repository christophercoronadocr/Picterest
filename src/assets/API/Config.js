import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.pexels.com/v1/',
    headers: {'Authorization': 'rcsgj3G6c3UvWlacGqThw9qCSpPfCirvOTXz9D6Ds7LkWSNjR5uwh72d'}
  });